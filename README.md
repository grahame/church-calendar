# church-calendar: a Deno library to calculate the Calendar of the Church

This deno module will calculate the calendar of the Church. At the moment,
it provides the Calendar of the Anglican Church of Australia. I'm very open to
contributions adding support for further calendars, from other denominations, or from
other provinces with the Anglican Church. The code has been developed in a way
which (I hope) will make it easy to do so.

For each feast, substantial metadata is provided, including:

- a list of Wikipedia articles
- a link to the relevant page in the Church of England's [Exciting Holiness](https://www.excitingholiness.org/)
- a link to the relevant page in the Episcopal Church's [Lesser Feasts and Fats](https://www.lectionarypage.net/CalndrsIndexes/TxtIndexLFF.html)

To give it a whirl:

```bash
# print out information about the current liturgical year
deno run https://deno.land/x/churchcalendar/cli/index.ts
```

... which produces the output:

```text
Calendar for liturgical year beginning 2023-12-03, ending 2024-11-30:
Liturgical seasons:
  Advent: 2023-12-03 to 2023-12-24
  Christmas: 2023-12-25 to 2024-01-05
  Epiphany: 2024-01-06 to 2024-01-06
  Season after Epiphany: 2024-01-07 to 2024-02-13
  Lent: 2024-02-14 to 2024-03-30
  Easter: 2024-03-31 to 2024-05-18
  Season after Pentecost: 2024-05-20 to 2024-11-30

Observations:
  2023-12-03: advent-1
  2023-12-04: nicholas-ferrar-deacon-and-man-of-prayer
  2023-12-06: nicholas-of-myra-bishop-and-philanthropist
  2023-12-07: ambrose-of-milan-bishop-and-teacher
  2023-12-08: the-conception-of-the-blessed-virgin-mary, richard-baxter-pastor-and-spiritual-writer
  2023-12-10: advent-2
  [... snipped ...]
```
