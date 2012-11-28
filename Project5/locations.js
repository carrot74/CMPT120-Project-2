            var score=0;
            var torchRoom_visited=0;
            var darkHall_visited=0;
            var skeletonRoom_visited=0;
            var emptyRoom_visited=0;
            var torchRoom_visisted=0;
            var hallTwo_visited=0;
            var ceilingRoom_visited=0;
            var blackRoom_visited=0;
            var mossyRoom_visited=0;
            var endRoom_visited=0;
            var treasureRoom_visited=0;
            var treasureRoomTwo_visited=0;
          	var x=0;
          	var y=0;
          	var torchPlaced= false;
          	var boneThrown=false;
          	var treasureOneTaken=false;
          	var treasureTwoTaken=false;
          	var currentLocation="";
          	var inventory=[];
          	var idLocations=[];
          	var globalInv=[];
          	
          	
          	  
        function updateText(msg){
           var ta = document.getElementById("taGame");
           ta.value = msg + "\n" + ta.value;
        }
          	
        function init(){
			var msg= "You wake up in a dark dank room. You see a message that reads: 'Run'. There are 4 passages to the north, south, east, and west. (You can use text commands too. Type 'n' for north, 's' for south, 'e' for east, 'w' for west.) type help for the command list."
			updateText(msg);
			currentLocation="startRoom";
          }
          	
        function btnGoClick(){
        var ia = document.getElementById("taInput");
          switch(ia.value){
			case "N":
			case "n":
				btnGoNorth();
				break;
			case "S":
			case "s":
				btnGoSouth();
				break;
			case "W":
			case "w":
				btnGoWest();
				break;
			case "E":
			case "e":
				btnGoEast();
				break;
			case "take torch":
				takeTorch();
				break;
			case "place torch":
				placeTorch();
				break;
			case "take bone":
				takeBone();
				break;
			case "throw bone":
				tossBone();
				break;
			case "toss torch":
				var msg=("you throw the torch and pick it back up again.")
				updateText(msg);
				break;
			case "place bone":
				var placeBoneMsg=("nothing happens so you pick the bone back up");
				updateText(placeBoneMsg);
				break;
			case "inventory":
				backpackDisplay();
				break;
			case "help":
				var helpMessage= ("commands are: n ,s ,e ,w , take, place, and throw. Type 'answer' to get the answer");
				updateText(helpMessage);
				break;
			case "place torch":
				var torchPlaced=true;
				placeTorch();
				break;
			case "answer":
				var msg=("go the torchRoom. Take the torch. Go to skeletonRoom and place torch. go west, north, and north again to win. You cheater. To get the max score, be sure to take bone at skeleton room and toss bone at ceilingRoom. Then take treasure in both treasureRooms. Don't toss your treasure.");
				updateText(msg);
				break;
			case "take treasure":
				takeTreasure();
				break;
			case "toss treasure":
				tossTreasure();
				break;
			case "place treasure":
				tossTreasure();
				break;
			default:
				var msg= ("That is an invalid command");
				updateText(msg);
			}
		}
		
	
		function tossTreasure(){
		globalInv[4] = new noItem(4,"Nothing","There is nothing in this slot");
		if(inventory[2].name==="Gold Coins"){
				var msg =("you throw some your treasure away. It scatters in the darkness never to be found again");
				updateText(msg);
				score=score-globalInv[2].value;
				inventory[2]=globalInv[4]
				} else if(inventory[3].name==="Diamonds"){
					var msg=("you throw away your treasure never to be found again.");
					updateText(msg);
					inventory[3]=globalInv[4]
					score=score-globalInv[3].value;
				}else{
				var msg=("what treasure?");
				updateText(msg);
				}
		}
		
		function takeTreasure(){
		globalInv[2] = new treasure(2,"Gold Coins","You take a handfull of treasure", 30);
		globalInv[3] = new treasure(3,"Diamonds","You take even more treasure in your hands", 50);
		if(x==-2&&y===0){
				updateText(globalInv[2].description);
				score=score+globalInv[2].value;
				inventory[2]=globalInv[2]
				}else if(x===-3&&y===0){
				updateText(globalInv[3].description);
				inventory[3]=globalInv[3]
				score=score+globalInv[3].value;
				}
		}
		
		//shows what items are in the backpack
		function backpackDisplay(){
			for (var i in inventory){
				var currentElement = inventory[i];
				updateText(i+" : " + currentElement);
			}
		}  
		
   
		//button functions  
        function btnGoNorth(){
          y=y+1;
          locationCheck();
          boundaryCheckButtons();
                }
                    
        function btnGoSouth(){
			y=y-1;
			locationCheck();
			boundaryCheckButtons();
          }
          
        function btnGoEast(){
			x=x-1;
			locationCheck();
			boundaryCheckButtons();
         } 
                
        function btnGoWest(){
            x=x+1;
            locationCheck();
            boundaryCheckButtons();
        }  
        /*idLocations[0] = new place(0,"Start Room","You find yourself back in the room you started","nothing",0,0 );
		idLocations[4] = new place(4,"Dark Hallway","You can't see anything but you hear dripping","nothing",0,1 );
		idLocations[5] = new place(5,"Skeleton Room","You see a skeleton. Its hands look like they were holding something. You also notice a loose bone.",Bone(),0,2 );
		idLocations[1] = new place(1,"Hall Two","You see a light at the end of this hallway.","nothing",0,-1 );
		idLocations[2] = new place(2,"Torch Room","All you see is a torch on the wall",torch(),0,-2 );
		idLocations[3] = new place(3,"Empty Room","There is nothing in this room","nothing",1,0 );
		idLocations[6] = new place(6,"Ceiling Room","you find a hole in the ceiling with a passage to the east, but there is a feral dog like creature there","nothing",-1,0 );
		idLocations[9] = new place(9,"Black Room","You're in a room where you cannot see anything","nothing",1,2 );
		idLocations[10] = new place(10,"Mossy Room","You're in a room filled with moss. You feel a breeze coming from north of you.","nothing",1,3 );
		idLocations[7] = new place(7,"Treasure Room","You see heaps of treasure on the floor",treasureOne,-2,0 );
		idLocations[8] = new place(8,"Treasure Room Two","You see even more heaps of treasure on the floor",treasureTwo,-3,0 );
		idLocations[11] = new place(11,"The End Room","You're outside. You suddenly remember your previous night. You had been out drinking heavily and wandered into a circus haunted house. You also notice for the first time that you are naked and there are several onlookers. Oops","nothing",1,4 );
       */
        //This is the start of the scoring functions    
        function startRoom(){
        idLocations[0] = new place(0,"Start Room","You find yourself back in the room you started","nothing",0,0 );
			if(x===0&&y===0){
			var msg=("You find yourself in the room you woke up in");
			updateText(msg);
			currentLocation="startRoom";
                }
       }
       function darkHall(){
       idLocations[4] = new place(4,"Dark Hallway","You can't see anything but you hear dripping","nothing",0,1 );
			if(x===0&&y===1&&darkHall_visited===0){
			updateText(idLocations[4].description);
			darkHall_visited=darkHall_visited+1;
			score=score+5;
			currentLocation=("darkHall");
					}else if(x===0&&y===1){
					updateText(idLocations[4].description);
					darkHall_visited= darkHall_visited+1;
					currentLocation=("darkHall");
				}
			}	
			
		function skeletonRoom(){
		idLocations[5] = new place(5,"Skeleton Room","You see a skeleton. Its hands look like they were holding something. You also notice a loose bone.",bone(),0,2 );
			if(x===0&&y===2&&skeletonRoom_visited===0){
			updateText(idLocations[5].description);
			score=score+5;
			skeletonRoom_visited=skeletonRoom_visited+1;
			currentLocation="skeletonRoom";
			}else if(x===0&&y===2){
				updateText(idLocations[5].description);
				skeletonRoom_visited=skeletonRoom_visited+1;
				currentLocation="skeletonRoom";
				}
		}	
	
		function hallTwo(){
		idLocations[1] = new place(1,"Hall Two","You see a light at the end of this hallway.","nothing",0,-1 );
			if(x===0&&y===-1&&hallTwo_visited===0){
				updateText(idLocations[1].description);
				score=score+5
				hallTwo_visited=hallTwo_visited=+1;
				currentLocation="hallTwo";
			}else if(x===0&&y===-1){
				updateText(idLocations[1].description);
				hallTwo_visited=hallTwo_visited=+1;
				currentLocation="hallTwo";
			}
		}
		
		function torchRoom(){
		idLocations[2] = new place(2,"Torch Room","All you see is a torch on the wall",torch(),0,-2 );
			if(x===0&&y===-2&&torchRoom_visited===0){
				updateText(idLocations[2].description);
				torchRoom_visited=torchRoom_visited+1;
				score=score+5
				currentLocation="torchRoom";
				}else if(x===0&&y===-2){
					updateText(idLocations[2].description);
					torchRoom_visited=torchRoom_visited+1;
					currentLocation="torchRoom";
			}
		}
		
		function emptyRoom(){
		idLocations[3] = new place(3,"Empty Room","There is nothing in this room","nothing",1,0 );
			if(x===1&&y===0&&emptyRoom_visited===0){
			updateText(idLocations[3].description);
			emptyRoom_visited=emptyRoom_visited+1;
			score=score+5;
			currentLocation="emptyRoom";
			}else if(x===1&&y===0){
				updateText(idLocations[3].description);
				emptyRoom_visited=emptyRoom_visited+1;
				currentLocation="emptyRoom";
				}
		}
		
		function ceilingRoom(){
		idLocations[6] = new place(6,"Ceiling Room","you find a hole in the ceiling with a passage to the east, but there is a feral dog like creature there","nothing",-1,0 );
			if(x===-1&&y===0&&ceilingRoom_visited===0){
				updateText(idLocations[6].description);
				ceilingRoom_visited=ceilingRoom_visited+1;
				score=score+5;
				currentLocation="ceilingRoom";
			}else if(x===-1&&y===0){
				updateText(idLocations[6].description);
				ceilingRoom_visited=ceilingRoom_visited+1;
				currentLocation="ceilingRoom";
			}
		}
		function blackRoom(){
			if(x===1&&y===2&&torchPlaced===true&&blackRoom_visited===0){
			idLocations[9] = new place(9,"Black Room","You're in a room where you cannot see anything","nothing",1,2 );
				updateText(idLocations[9].description);
				blackRoom_visited=blackRoom_visited+1;
				score=score+5;
				currentLocation="blackRoom";
			}else if(x===1&&y===2&&torchPlaced===true){
				var msg=("You're in a room where you cannot see anything");
				updateText(idLocations[9].description);
				blackRoom_visited=blackRoom_visited+1;
				currentLocation="blackRoom";
			}
		}
		function mossyRoom(){
		idLocations[10] = new place(10,"Mossy Room","You're in a room filled with moss. You feel a breeze coming from north of you.","nothing",1,3 );
			if (x===1&&y===3&&torchPlaced===true&&mossyRoom_visited===0){
				updateText(idLocations[9].description);
				mossyRoom_visited=mossyRoom_visited+1;
				score=score+5;
				currentLocation="mossyRoom";
			}else if(x===1&&y===3&&torchPlaced===true){
			var msg=("You're in a room filled with moss. You feel a breeze coming from north of you.")
				updateText(idLocations[9].description);
				mossyRoom_visited=mossyRoom_visited+1;
				currentLocation="mossyRoom";
			}
		}
		function treasureRoom(){
		idLocations[7] = new place(7,"Treasure Room","You see heaps of treasure on the floor",treasure(),-2,0 );
			if(x===-2 && y===0 && boneThrown===true && treasureRoom_visited===0){
				updateText(idLocations[7].description);
				treasureRoom_visited=treasureRoom_visited+1;
				score=score+5;
				currentLocation="treasureRoom";
			}else if(x===-2 && y===0 && boneThrown===true){
				var msg=("You see heaps of treasure on the floor");
				updateText(idLocations[7].description);
				treasureRoom_visited=treasureRoom_visited+1;
				currentLocation="treasureRoom";
			}
		}
		
		function treasureRoomTwo(){
		idLocations[8] = new place(8,"Treasure Room Two","You see even more heaps of treasure on the floor",treasure(),-3,0 );
			if(x===-3 && y===0 && boneThrown===true && treasureRoomTwo_visited===0){
				updateText(idLocations[8].description);
				treasureRoomTwo_visited=treasureRoomTwo_visited+1;
				score=score+5;
				currentLocation="treasureRoomTwo";
			}else if(x===-3 && y===0 && boneThrown===true){
				updateText(idLocations[9].description);
				treasureRoomTwo_visited=treasureRoomTwo_visited+1;
				currentLocation="treasureRoomTwo";
			}
		}
		
		function endRoom(){
		idLocations[11] = new place(11,"The End Room","You're outside. You suddenly remember your previous night. You had been out drinking heavily and wandered into a circus haunted house. You also notice for the first time that you are naked and there are several onlookers. Oops","nothing",1,4 );
			if(x===1 && y===4 && torchPlaced===true && endRoom_visited===0){
				updateText(idLocations[11].description);
				endRoom_visited=endRoom_visited+1;
				score=score+5;
				currentLocation="endRoom";
			}else if(x===1 && y===4 && torchPlaced===true){
				updateText(idLocations[11].description);
				endRoom_visited=endRoom_visited+1;
				currentLocation="endRoom";
			}	
		}
		
		//adds torch to the inventory
        function takeTorch(){
			if(x===0&&y===-2){
			globalInv[0] = new torch(1,"torch","You pick up a torch. Though it does not seem to illuminate your way");
				inventory[0]=(globalInv[0]);
				updateText(globalInv[0].description);
				}
			}
		//places the torch and allows access to the other 3 locations
		function placeTorch(){
		globalInv[4] = new noItem(4,"Nothing","There is nothing in this slot");
			if(currentLocation==="skeletonRoom"&&inventory[0].name==="torch"){
				var msg=("You put the torch in the skeleton's hands. A door to the west opens up. ")
				updateText(msg);
				torchPlaced=true;
				document.getElementById("west_button").disabled=false;
				inventory[0]= globalInv[4];
					}else{
					var msg=("You don't have a torch to place.");
					updateText(msg);
				}
		}
		//picks up bone 
		function takeBone(){
		globalInv[1] = new bone(2,"Bone","you snap off the bone from the skeleton");
			if(currentLocation==="skeletonRoom"){
			inventory[1]=globalInv[1];
			var msg=("you snap off the bone from the skeleton");
			updateText(msg);
			}
		}
		//throws bone to rabid dog like creature
		function tossBone(){
		globalInv[4] = new noItem(4,"Nothing","There is nothing in this slot");
			if(currentLocation==="ceilingRoom"&&inventory[1].name==="Bone"){
			var msg=("you take the bone from your backpack and throw it. The hellspawn thing starts gnawing on it. ");
			updateText(msg);
			document.getElementById("east_button").disabled=false;
			boneThrown=true;
			inventory[1]=globalInv[4];
				}else{
				var msg=("you don't have a bone to throw.");
				updateText(msg);
			}
		}
		
		//displays current location
		function currentLocation_display(){
		var msg=currentLocation;
		updateText(msg);
		}
		//executes the locations depending on x and y coordinates
		function locationCheck(){
			skeletonRoom();
			mossyRoom();
			blackRoom();
			torchRoom();
			hallTwo();
			emptyRoom();
			darkHall();
			endRoom();
			ceilingRoom();
			treasureRoom();
			treasureRoomTwo();
			startRoom();
		}
		//Checks the boundaries and prevents player from moving outside of the game when player uses buttons.
		function boundaryCheckButtons(){
			switch(currentLocation){
				case "startRoom":
					document.getElementById("north_button").disabled=false;
					document.getElementById("south_button").disabled=false;
					document.getElementById("east_button").disabled=false;
					document.getElementById("west_button").disabled=false;
					break;
				case "emptyRoom":
					document.getElementById("north_button").disabled=true;
					document.getElementById("south_button").disabled=true;
					document.getElementById("east_button").disabled=false;
					document.getElementById("west_button").disabled=true;
					break;
				case "ceilingRoom":
				if(boneThrown===false){
					document.getElementById("north_button").disabled=true;
					document.getElementById("south_button").disabled=true;
					document.getElementById("east_button").disabled=true;
					document.getElementById("west_button").disabled=false;	
					}else{
					document.getElementById("north_button").disabled=true;
					document.getElementById("south_button").disabled=true;
					document.getElementById("east_button").disabled=false;
					document.getElementById("west_button").disabled=false;
					}
					break;
				case "hallTwo":
					document.getElementById("north_button").disabled=false;
					document.getElementById("south_button").disabled=false;
					document.getElementById("east_button").disabled=true;
					document.getElementById("west_button").disabled=true;
					break;
				case "darkHall":
					document.getElementById("north_button").disabled=false;
					document.getElementById("south_button").disabled=false;
					document.getElementById("east_button").disabled=true;
					document.getElementById("west_button").disabled=true;
					break;
				case "endRoom":
					document.getElementById("north_button").disabled=true;
					document.getElementById("south_button").disabled=true;
					document.getElementById("east_button").disabled=true;
					document.getElementById("west_button").disabled=true;
					break;
				case "torchRoom":
					document.getElementById("north_button").disabled=false;
					document.getElementById("south_button").disabled=true;
					document.getElementById("east_button").disabled=true;
					document.getElementById("west_button").disabled=true;
					break;
				case "skeletonRoom":
					if(torchPlaced===false){
					document.getElementById("north_button").disabled=true;
					document.getElementById("south_button").disabled=false;
					document.getElementById("east_button").disabled=true;
					document.getElementById("west_button").disabled=true;
						}else{
						document.getElementById("north_button").disabled=true;
						document.getElementById("south_button").disabled=false;
						document.getElementById("east_button").disabled=true;
						document.getElementById("west_button").disabled=false;
					}
					break;
				case "mossyRoom":
					document.getElementById("north_button").disabled=false;
					document.getElementById("south_button").disabled=false;
					document.getElementById("east_button").disabled=true;
					document.getElementById("west_button").disabled=true;
					break;
				case "blackRoom":
					document.getElementById("north_button").disabled=false;
					document.getElementById("south_button").disabled=true;
					document.getElementById("east_button").disabled=false;
					document.getElementById("west_button").disabled=true;
					break;
				case "treasureRoom":
					document.getElementById("north_button").disabled=true;
					document.getElementById("south_button").disabled=true;
					document.getElementById("east_button").disabled=false;
					document.getElementById("west_button").disabled=false;
					break;
				case "treasureRoomTwo":
					document.getElementById("north_button").disabled=true;
					document.getElementById("south_button").disabled=true;
					document.getElementById("east_button").disabled=true;
					document.getElementById("west_button").disabled=false;
					break;
				default:
					alert("YOU BROKE THE GAME! CONGRATS!");
				
							}
		}	