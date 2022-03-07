var self;

export class Countdown {
   constructor(_target, _startTime, _useMiliseconds) {
      self = this;
      this.startTime = _startTime;
      this.currentTime = _startTime;

      this.count = null;
      this.target = _target;
      this.useMiliseconds = (_useMiliseconds == true) ? _useMiliseconds : false;
      
      this.executed = false;

      this.useMiliseconds ? this.updateInterface__seconds() : this.updateInterface();
   }

   updateInterface() {
      if(!self.executed) { // this makes that the values pass to seconds only once time 
         self.currentTime *= 60;
         self.executed = true;
      }
      
      let minutes = Math.floor(self.currentTime / 60);
      let seconds = self.currentTime % 60;

      self.target.textContent = `${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;
   }

   updateInterface__seconds() {
      let seconds = Math.floor(self.currentTime / 1000);
      let milisec = self.currentTime % 1000;

      self.target.textContent = `${seconds.toString()}:${milisec.toString().padStart(3, 0)}`;
   }

   play() {
      if (self.useMiliseconds) { // if useSecons is true 
         if(!self.count) {
            self.count = setInterval(() => {
               //verify if the interval is not finsihed
               if(self.currentTime <= 0) self.stop(); 
               else {
                  self.currentTime -= 10;
                  self.updateInterface__seconds();
               }
            }, 10);
         } else console.log('The timer is currently runing!!!');

      } else { // If we not define seconds use the format in minutes
         if(self.useMiliseconds == undefined) {
            console.warn('The countdown cannot start because you define a wrong parameter');
         } 
         if(!self.count) {
            self.count = setInterval(() => {
               if(self.currentTime <= 0) self.stop();
               else {
                  self.currentTime -= 1;
                  self.updateInterface();
               }
            }, 1000);
         } else console.log('The timer is currently runing!!!');
      }
   }
   
   stop () {
      clearInterval(self.count);
      self.count = null;
   }

   reload() {
      self.stop();
      self.executed = false; // set to false again for make the multiplication if use minutes format
      self.currentTime = self.startTime; // reset to the initial value
      self.useMiliseconds ? self.updateInterface__seconds() : self.updateInterface(); // and print
   }
}