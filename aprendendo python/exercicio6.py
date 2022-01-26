def create_triangle(side1, side2, side3):
    not_triangle = (
      side1 + side2 < side3 and
      side2 + side3 < side1 and
      side1 + side3 < side2
    )

    if side1 == side2 and side2 == side3:
      return 'Triângulo Equilátero'
    elif side1 == side2 or side1 == side3 or side2 == side3:
      return 'Trigangulo Isósceles'
    elif side1 != side2 and side2 != side3 and side3 != side1:
      return 'Triangulo Escaleno'
    elif not_triangle:
      return 'Não é triângulo'
