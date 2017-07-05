// defines pins numbers
const int trig = 9;
const int echo = 10;

// defines variables
long duration;
int distance;


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


  // Prints the distance on the Serial Monitor
 //Serial.print("Distance: ");
 //Serial.println(distance);
 Serial.write(distance);
}

