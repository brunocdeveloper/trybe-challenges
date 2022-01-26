def find_bigger_name(names):
    biger = ''
    for name in names:
      if len(name) > len(biger):
        biger = name
    return biger
