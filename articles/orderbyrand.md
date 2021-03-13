### 随机排序的一种优化实现

```sql
SELECT * FROM <table_name> ORDER BY RAND() LIMIT 50;

WITH a AS (
	SELECT id FROM <table_name> WHERE RAND() < (<expected_count> * N)/<row_count>
)
SELECT * FROM <table_name> WHERE id IN (SELECT id FROM a);
```
