// defines pins numbers
const int trig = 9;
const int echo = 10;
//int freq;
//const int ledPin = 13;

// defines variables
long duration;
int distance;
int safetyDistance;



void setup() {
  pinMode(trig, OUTPUT); // Sets the trigPin as an Output
  pinMode(echo, INPUT); // Sets the echoPin as an Input
  //pinMode(sound, OUTPUT);
  Serial.begin(9600); // Starts the serial communication
 
}


void loop() {
  

  
  // Clears the trigPin
  digitalWrite(trig, LOW);
  delayMicroseconds(2);

  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);

  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echo, HIGH);

  // Calculating the distance
  distance = duration * 0.034 / 3;

  //safetyDistance = distance;

  //freq = distance;
  /*int speaker = map(freq, 0, 11, 10, 1000);

  if (distance == 2)
  {
    tone(sound, 261.63);
  } //c

  if (distance == 4)
  {
    tone(sound, 293.66);
  } //d

  if (distance == 6)
  {
    tone(sound, 329.63);
  } //e

  if (distance == 8)
  {
    tone(sound, 349.23);
  } //f

  if (distance == 10)
  {
    tone(sound, 392);
  } //g

  if (distance == 12)
  {
    tone(sound, 440);
  } //a

  if (distance == 14)
  {
    tone(sound, 466.16);
  } //Bb

  if (distance == 16)
  {
    tone(sound, 523.25);
  } //Bb

  if (distance == 18)
  {
    tone(sound, 587.33);
  }

  if (distance == 20)
  {
    tone(sound, 659.25);
  }

  if (distance == 22)
  {
    tone(sound, 698.46);
  }


  if (distance == 24)
  {
    tone(sound, 880.00);
  }
  

  if (distance > 26)
  {
    tone(sound, LOW);
  }


  //tone(sound, speaker);*/


  /*if (safetyDistance <= 5){
    digitalWrite(sound, HIGH);
    }
    else{
    digitalWrite(sound, LOW);
    } */

  // Prints the distance on the Serial Monitor
 //Serial.print("Distance: ");
 //Serial.println(distance);
 Serial.write(distance);
}



//http://www.music-for-music-teachers.com/o-mio-babbino.html

//http://www.phy.mtu.edu/~suits/notefreqs.html

//https://github.com/drios42/toneInClassFeb2017/blob/master/tone.ino

//https://www.youtube.com/watch?v=HynLoCtUVtU
