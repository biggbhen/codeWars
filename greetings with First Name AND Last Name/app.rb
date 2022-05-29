class Person
  def initialize(name, surname)
    @name, @surname = name, surname
  end
  
  def greet
    "Hello, #{@name} #{@surname}!"
  end
end


# # create an object
# person = Person.new('Bob', 'smith')

# # call instance methods
# a = person.greet()
# puts "Hello #{a}"