class Person
  status: '���d'
  
  constructor: (@name) ->

  toString: ->
    window.alert "#{@name}�O#{@status}���C"

p = new Person '����'
p.toString()
