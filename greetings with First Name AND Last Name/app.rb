class Person 
  def initialize(f, l) 
    @firstName = f
    @lastName = l
  end
  def greet
   @firstName + @lastName
  end
  
  end
const person = new Person('Bob', 'smith');



   def getArea
      @width * @height
   end
end

# create an object
person = Person.new('Bob', 'smith')

# call instance methods
a = person.greet()
puts "Area of the box is : #{a}"