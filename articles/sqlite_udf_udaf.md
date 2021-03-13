### SQLite UDF/UDAF 的实现

```php
<?php

// sqlite UDF/UDAF 支持
// https://blog.csdn.net/wyqwilliam/article/details/84500578

// 参考：
// php 版本实现：https://www.php.net/manual/en/ref.pdo-sqlite.connection.php
// go 版本实现：https://github.com/mattn/go-sqlite3/pull/229/files

$db = new \PDO('sqlite::memory:');
//$db->setAttribute(PDO::ATTR)
// $db = new \PDO('sqlite:');
// $db = new \PDO('sqlite:tmp.db');
$db->exec('
    CREATE TABLE "role" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "actor" TEXT,
      "movie" TEXT,
      "year" INTEGER
    );
');
$insert = $db->exec('
    INSERT INTO role
     (actor, movie, year)
    VALUES 
    ("杨幂", "新聊斋志异", 2005),
    ("杨幂", "仙剑奇侠传", 2009),
    ("胡歌", "仙剑奇侠传", 2005),
    ("胡歌", "琅琊榜", 2015),
    ("胡歌", "神话", 2010),
    ("周迅", "大明宫词", 2000),
    ("周迅", "人间四月天", 2000)
;
');

$db->sqliteCreateFunction('IF', function ($expr, $value1, $value2) {
    if ($expr) {
        return $value1;
    }
    return $value2;
});

$db->sqliteCreateFunction('GREATEST', function ($value1, $value2) {
    return max([$value1, $value2]);
});

$query = $db
    ->query('SELECT actor, movie, year, IF (year <= 2005, "old", "new") AS `type` FROM role');
while ($data = $query->fetchObject()) {
    print_r($data);
}
/*
stdClass Object
(
    [actor] => 杨幂
    [movie] => 新聊斋志异
    [year] => 2005
    [type] => old
)
stdClass Object
(
    [actor] => 杨幂
    [movie] => 仙剑奇侠传
    [year] => 2009
    [type] => new
)
stdClass Object
(
    [actor] => 胡歌
    [movie] => 仙剑奇侠传
    [year] => 2005
    [type] => old
)
stdClass Object
(
    [actor] => 胡歌
    [movie] => 琅琊榜
    [year] => 2015
    [type] => new
)
stdClass Object
(
    [actor] => 胡歌
    [movie] => 神话
    [year] => 2010
    [type] => new
)
stdClass Object
(
    [actor] => 周迅
    [movie] => 大明宫词
    [year] => 2000
    [type] => old
)
stdClass Object
(
    [actor] => 周迅
    [movie] => 人间四月天
    [year] => 2000
    [type] => old
)
*/

$query = $db
    ->query('SELECT actor, GROUP_CONCAT(movie) AS all_movies FROM role GROUP BY actor');
while ($data = $query->fetchObject()) {
    print_r($data);
}
/*
stdClass Object
(
    [actor] => 周迅
    [all_movies] => 大明宫词,人间四月天
)
stdClass Object
(
    [actor] => 杨幂
    [all_movies] => 新聊斋志异,仙剑奇侠传
)
stdClass Object
(
    [actor] => 胡歌
    [all_movies] => 仙剑奇侠传,琅琊榜,神话
)
*/

$db->sqliteCreateAggregate('GROUP_CONCAT', function ($context, $row_number, $field) {
    if (is_null($context)) {
        return $field;
    }
    return $context . '/' . $field;
}, function ($context, $rowcount) { return $context; });
/*
 stdClass Object
(
    [actor] => 周迅
    [all_movies] => 大明宫词/人间四月天
)
stdClass Object
(
    [actor] => 杨幂
    [all_movies] => 新聊斋志异/仙剑奇侠传
)
stdClass Object
(
    [actor] => 胡歌
    [all_movies] => 仙剑奇侠传/琅琊榜/神话
)
*/
```
