import sqlite3



con = sqlite3.connect('database.db')

cur = con.cursor()

# cur.execute("CREATE TABLE day(date, got_up, fell_asleep)")

res = cur.execute("select name from sqlite_master")
print(res.fetchone())