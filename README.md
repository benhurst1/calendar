## Calendar Countdown

Got a special date coming up? A birthday? Or want to know exactly how many seconds you have been alive.
I present a webpage where you can see how many days it has been since an event, or to an event.

Live link: [Date Countdown](https://benhurst1.github.io/date_countdown/)

It will list the number of days, hours, minutes or seconds since or to the date you insert.
You can also save dates for when you return.

### Backstory

I created this as a way to easily track the number of days until certain events, such as weddings and holidays.
I previously made this using plain javascript, but as I moved onto react I wanted to recreate it using components.
This is still in development and there's a few areas I want to improve, refactor and add.

### Features

- Uses [react-datepicker](https://github.com/Hacker0x01/react-datepicker) for the calendar input.
- [dayjs](https://day.js.org/) for creating the date objects.
- First time with useContext, much easier to store and reference data than using useStates and props.

### Future development

- I'd like to add some pre-made dates in a dropdown tab on the left.
- Some simple settings to add to local storage also would be good such as a dark mode.
- I also want to make it responsive and add accessability features.
- A small bug is that when saving a date, it doesn't automatically refresh the saved dates list.

<img src="/public/imgs/image.png" width="800">
