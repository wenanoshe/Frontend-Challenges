# Simple Simple CountDown
Simple CountDown is  an library that lets include in your projects a simple countdown, for example in a task, an exam with time, and in anything that you can think.
Look a demo in https://simplesimplecountdown.netlify.app
## First version
```js
import { Countdown } from "./simpleCountDown/scripts/countdown.js";

new Countdown(target, startTime, useMiliseconds(optional boolean))
```
For create a new countdown, you import the class into your project, and then, creates a new instance.
### Parameters
- **target** : is the element in which will be printed the countdown.
- **startTime** : (number) recives the initial value in minutes.
- **useMiliseconds** : (boolean) [default = false] if we set true, you will use the format in miliseconds if is not defined use the minutes format.
### Methods
- **`play()`** : starts the countdown
- **`stop()`** : stop or pause the countdown
- **`reload()`** : reload the countdown