import csv

with open("colunas.csv") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)
