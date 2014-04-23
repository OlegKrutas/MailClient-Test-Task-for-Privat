# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
mails = Mail.create([
    {
        from: 'AIvanov Ivan', 
        email: 'ivanov@mail.ru',
        to: 'Petrov Petr(peter@gmail.com)',
        date: '12.12.2014',
        subject: 'Test',
        text: 'First letter',
        status: 'incoming'
    },
    {
        from: 'BIvanov Ivan', 
        email: 'ivanov@mail.ru',
        to: 'Petrov Petr(peter@gmail.com)',
        date: '12.12.2014',
        subject: 'Aest',
        text: 'First letter',
        status: 'incoming'
    },
    {
        from: 'FIvanov Ivan', 
        email: 'ivanov@mail.ru',
        to: 'Petrov Petr(peter@gmail.com)',
        date: '12.12.2014',
        subject: 'Best',
        text: 'First letter',
        status: 'incoming'
    },
    {
        from: 'WIvanov Ivan', 
        email: 'ivanov@mail.ru',
        to: 'Petrov Petr(peter@gmail.com)',
        date: '12.12.2014',
        subject: 'Cest',
        text: 'First letter',
        status: 'incoming'
    },
    {
        from: 'Petr Petrov', 
        email: 'peter@gmail.com',
        to: 'Ivanov Ivan(ivanov@mail.ru)',
        date: '12.12.2014',
        subject: 'Test',
        text: 'Second letter',
        status: 'outputing'
    },
    {
        from: 'APetr Petrov', 
        email: 'peter@gmail.com',
        to: 'Ivanov Ivan(ivanov@mail.ru)',
        date: '12.12.2014',
        subject: 'Test',
        text: 'Second letter',
        status: 'outputing'
    },
    {
        from: 'HPetr Petrov', 
        email: 'peter@gmail.com',
        to: 'Ivanov Ivan(ivanov@mail.ru)',
        date: '12.12.2014',
        subject: 'Test',
        text: 'Second letter',
        status: 'outputing'
    }])
