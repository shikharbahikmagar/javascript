class User
{
    constructor(username)
    {
        this.username = username
    }
}

class Teacher extends User{
    constructor(username, email, password)
        {
        super(username)
        this.email = email
        this.password = password
        }

        addCourse()
        {
            console.log(`this course is added by ${this.username}`);
        }
}

const newT = new Teacher("shikhar", "s@gmail.com", "123")
newT.addCourse();