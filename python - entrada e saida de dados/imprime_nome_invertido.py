nome = input("Digite seu nome: ")

for removed_letters in range(len(nome)):
    for index in range(len(nome) - removed_letters):
        print(nome[index], end="")
    print()


"""
  resolução do gabarito
  
 def vertical_inverted_ladder(word):
    for removed_letters in range(len(word)):
        for index in range(len(word) - removed_letters):
            print(word[index], end="")
        print()

if __name__ == "__main__":
    name = input("Digite um nome: ")
    vertical_inverted_ladder(name) """