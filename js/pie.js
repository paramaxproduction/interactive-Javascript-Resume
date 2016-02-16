var data = [
    {"value": 120, "name": "Javascript"},
    {"value": 50, "name": "jQuery"},
    {"value": 40, "name": "HTML"},
    {"value": 40, "name": "CSS"},
    {"value": 30, "name": "Bootstrap"},
    {"value": 10, "name": "Wordpress"}
  ]
  d3plus.viz()
    .container("#container")
    .data(data)
    .type("pie")
    .id("name")
    .size("value")
    .draw()
