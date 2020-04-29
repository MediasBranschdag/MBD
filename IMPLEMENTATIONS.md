# Implementations
Here you can find different motivation why and how a certain implementation was created. Details about an implementation can not be found here as it should be documented by comments, or even better, the code itself. Instead, this documents is for overall arguments and motivation that can be hard to place in the websites code.

### Question about this documents
**Why should there not exist any details about an implementation here?**  
This is because when the code changes, it needs to be changed here as well. To always need to check if a certain code has been documented here can be cumbersome and sometimes forgotten. This can result in the code saying something and this document another thing which can create a lot of confusion for other developers.

**I do like or agree with the arguments of an implementation.**  
Nice, then you can make the code even better! If you rewrite, remove or add a new implementation, be sure to edit this documents as well if it could not be documented in the code.

**How do I know if a should write about an implementation here?**
A rule of thumb is to write about an implementation when the following criteria are made:  
* The logic behind it can not be understood by only looking at the code.
* The arguments "why" must be documented on multiple places in the code.
* The arguments "why" can not be documented in the code (Database relationships, folder structures) 

## The translation system
**Keywords**: *Language, Translation, Phrase*
### Translation data
The currently structure is that short sentences (Phrases) are stored in a
separate file in order to be able to reuse phrases. Long text are stored in the pages as because it is easier to edit and injecting dynamic data into the text.