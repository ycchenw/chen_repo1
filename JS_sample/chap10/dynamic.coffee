class Person

  constructor: (@name) ->

p = new Person '����'

Person::work = (type) ->
  window.alert "#{@name}�O#{type}�u�@���C"
  return

p.work '�ԾĦa'