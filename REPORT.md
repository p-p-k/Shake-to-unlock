Piotr Kruszynski

## Report

Would you like it if your car unlocked by itself whenever you’d come near it with some kind of device in your pocket? Or, would you prefer to have to take some more deliberate action to unlock? For those that – after leaving the car – worry if they’ve locked it, how might we make the act of locking more memorable?

This prototype explored if shaking a handheld device could work for locking and unlocking the car. The assumption was that shaking is a more energetic and bodily stimulating way of interacting with a car key than what’s supported today – and that this might make it more memorable. 

To prototype and test the experience, I wanted people to be able to shake the phone and – if the shaking was vigorous enough – give them feedback through a simple change of browser background color. The switch between red and green background would represent a change in lock state. To make it work, I had to look into how shaking can be detected in the first place. The phone’s built-in accelerometer can sense when a change in acceleration occurs and this data can be returned through code by listening for a device motion event (LePage, 2018). When compared to a predetermined threshold, the data stream relating to the human activity of shaking could be used to trigger something, such as a background color change (or unlocking a car). 

In the next phase, I wanted to see if the prototype could better convey the experience of changing something remotely. Thus, shaking the phone should result in a change somewhere else. To make it happen, I used WebSockets, a technology that allows just this type of cross-device communication.

Working on this project has reinforced my belief in having at least an elementary understanding of programming, in order to capably sketch and prototype interactive solutions. Rather than operating within the limits built into existing tools and environments for prototyping, I can see how this fundamental knowledge of coding might allow for more experimental, non-standard, and unrestrained ways of shaping interactions with digital artefacts. I hope that learning about connectivity, data streams, and the central principles of JavaScript could form the basis for picking up related languages and other code-based tools.

Apart from providing a foundation for the work as an interaction designer, getting a grasp of what code can do seems like a good idea in a world where more and more areas of life are mediated by algorithms.


**References:**

LePage, Pete. (2018). Device Orientation & Motion. Retrieved 2018 April 9 from https://developers.google.com/web/fundamentals/native-hardware/device-orientation/#device_motion

