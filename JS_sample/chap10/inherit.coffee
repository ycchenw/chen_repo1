class Person
  status: '���d'
  
  constructor: (@name) ->

  toString: ->
    "#{@name}�O#{@status}���C"

class BusinessPerson extends Person
  work: (type) ->
    window.alert "#{@name}�O#{type}�u�@���C"
    return
    
  toString: ->
    "SOHO��#{super()}"

bp = new BusinessPerson '����'
bp.work '�ԾĦa'
window.alert bp.toString()
