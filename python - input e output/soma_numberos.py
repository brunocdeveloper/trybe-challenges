numeros = input("Insira valores aqui, separados por espaço: ")

numsArr = numeros.split(" ")

sum = 0

for num in numsArr:
  if not num.isdigit():
    print(f"Erro ao somar valores, {num} não é um digito.")
  else:
    sum += int(num)

print(f"A soma dos valores válidos é: {sum}")