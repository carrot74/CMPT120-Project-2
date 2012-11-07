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
          	  
        function updateText(msg){
           var ta = document.getElementById("taGame");
           ta.value = msg + "\n" + ta.value;
        }
          	
        function init(){
			var msg= "You wake up in a dark dank room. You see a message that reads: 'Run'. There are 4 passages to the north, south, east, and west. (You can use text commands too. Type 'n' for north, 's' for south, 'e' for east, 'w' for west.)"
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
			case "toss bone":
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
				var helpMessage= ("commands are: n ,s ,e ,w , take, place, and toss. Type 'answer' to get the answer");
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
		if(inventory[2]==="treasure"){
				var msg =("you throw some your treasure away. It scatters in the darkness never to be found again");
				updateText(msg);
				score=score-30;
				inventory[2]="nothing";
				} else if(inventory[3]==="treasure"){
					var msg=("you throw away your treasure never to be found again.");
					updateText(msg);
					inventory[3]="nothing";
					score=score-50;
				}else{
				var msg=("what treasure?");
				updateText(msg);
				}
		}
		
		function takeTreasure(){
		if(x==-2&&y===0){
				var msg=("You take some treasure");
				updateText(msg);
				score=score+30;
				inventory[2]="treasure"
				}else if(x===-3&&y===0){
				var msg=("You take as much treasure as you can hold");
				updateText(msg);
				inventory[3]="treasure"
				score=score+50;
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
          boundariesText();
                }
                    
        function btnGoSouth(){
			y=y-1;
			locationCheck();
			boundaryCheckButtons();
			boundariesText();
          }
          
        function btnGoEast(){
			x=x-1;
			locationCheck();
			boundaryCheckButtons();
			boundariesText();
         } 
                
        function btnGoWest(){
            x=x+1;
            locationCheck();
            boundaryCheckButtons();
            boundariesText();
        }
        //This is the start of the location functions    
        function startRoom(){
			if(x===0&&y===0){
			var msg=("You find yourself in the room you woke up in");
			updateText(msg);
			currentLocation="startRoom";
                }
       }
       function darkHall(){
			if(x===0&&y===1&&darkHall_visited===0){
			var msg=("You're in a hallway. You hear dripping");
			updateText(msg);
			darkHall_visited=darkHall_visited+1;
			currentLocation="darkHall";
			score=score+5;
					}else if(x===0&&y===1){
					var msg=("You're in a hallway. You hear dripping");
					updateText(msg);
					darkHall_visited= darkHall_visited+1;
					currentLocation="darkHall";
				}
			}	
			
		function skeletonRoom(){
			if(x===0&&y===2&&skeletonRoom_visited===0){
			var msg=("You are in a room with a skeleton. Its hands look like they were holding something. Maybe a stick. You also see a loose bone.");
			updateText(msg);
			score=score+5;
			skeletonRoom_visited=skeletonRoom_visited+1;
			currentLocation="skeletonRoom";
			}else if(x===0&&y===2){
				var msg=("You are in a room with a skeleton. Its hands look like they were holding something. Maybe a stick. You also see a loose bone.");
				updateText(msg);
				skeletonRoom_visited=skeletonRoom_visited+1;
				currentLocation="skeletonRoom";
				}
		}	
	
		function hallTwo(){
			if(x===0&&y===-1&&hallTwo_visited===0){
				var msg=("You see a light at the end of this hallway.");
				updateText(msg);
				score=score+5
				hallTwo_visited=hallTwo_visited=+1;
				currentLocation="hallTwo";
			}else if(x===0&&y===-1){
				var msg=("You see a light at the end of this hallway.");
				updateText(msg);
				hallTwo_visited=hallTwo_visited=+1;
				currentLocation="hallTwo";
			}
		}
		
		function torchRoom(){
			if(x===0&&y===-2&&torchRoom_visited===0){
				var msg=("All you see is a torch on the wall");
				updateText(msg);
				torchRoom_visited=torchRoom_visited+1;
				score=score+5
				currentLocation="torchRoom";
				}else if(x===0&&y===-2){
					var msg=("All you see is a torch on the wall");
					updateText(msg);
					torchRoom_visited=torchRoom_visited+1;
					currentLocation="torchRoom";
			}
		}
		
		function emptyRoom(){
			if(x===1&&y===0&&emptyRoom_visited===0){
			var msg=("There is nothing in this room");
			updateText(msg);
			emptyRoom_visited=emptyRoom_visited+1;
			score=score+5;
			currentLocation="emptyRoom";
			}else if(x===1&&y===0){
				var msg=("There is nothing in this room");
				updateText(msg);
				emptyRoom_visited=emptyRoom_visited+1;
				currentLocation="emptyRoom";
				}
		}
		
		function ceilingRoom(){
			if(x===-1&&y===0&&ceilingRoom_visited===0){
				var msg=("you find a hole in the ceiling with a passage to the east, but there is a feral dog like creature there");
				updateText(msg);
				ceilingRoom_visited=ceilingRoom_visited+1;
				score=score+5;
				currentLocation="ceilingRoom";
			}else if(x===-1&&y===0){
				var msg=("you find a hole in the ceiling with a passage to the east, but there is a feral dog like creature there");
				updateText(msg);
				ceilingRoom_visited=ceilingRoom_visited+1;
				currentLocation="ceilingRoom";
			}
		}
		function blackRoom(){
			if(x===1&&y===2&&torchPlaced===true&&blackRoom_visited===0){
				var msg=("You're in a room where you cannot see anything");
				updateText(msg);
				blackRoom_visited=blackRoom_visited+1;
				score=score+5;
				currentLocation="blackRoom";
			}else if(x===1&&y===2&&torchPlaced===true){
				var msg=("You're in a room where you cannot see anything");
				updateText(msg);
				blackRoom_visited=blackRoom_visited+1;
				currentLocation="blackRoom";
			}
		}
		function mossyRoom(){
			if (x===1&&y===3&&torchPlaced===true&&mossyRoom_visited===0){
				var msg=("You're in a room filled with moss. You feel a breeze coming from north of you.")
				updateText(msg);
				mossyRoom_visited=mossyRoom_visited+1;
				score=score+5;
				currentLocation="mossyRoom";
			}else if(x===1&&y===3&&torchPlaced===true){
			var msg=("You're in a room filled with moss. You feel a breeze coming from north of you.")
				updateText(msg);
				mossyRoom_visited=mossyRoom_visited+1;
				currentLocation="mossyRoom";
			}
		}
		function treasureRoom(){
			if(x===-2 && y===0 && boneThrown===true && treasureRoom_visited===0){
				var msg=("You see heaps of treasure on the floor");
				updateText(msg);
				treasureRoom_visited=treasureRoom_visited+1;
				score=score+5;
				currentLocation="treasureRoom";
			}else if(x===-2 && y===0 && boneThrown===true){
				var msg=("You see heaps of treasure on the floor");
				updateText(msg);
				treasureRoom_visited=treasureRoom_visited+1;
				currentLocation="treasureRoom";
			}
		}
		
		function treasureRoomTwo(){
			if(x===-3 && y===0 && boneThrown===true && treasureRoomTwo_visited===0){
				var msg=("You see even more treasure on the floor");
				updateText(msg);
				treasureRoomTwo_visited=treasureRoomTwo_visited+1;
				score=score+5;
				currentLocation="treasureRoomTwo";
			}else if(x===-3 && y===0 && boneThrown===true){
				var msg=("You see even more treasure on the floor");
				updateText(msg);
				treasureRoomTwo_visited=treasureRoomTwo_visited+1;
				currentLocation="treasureRoomTwo";
			}
		}
		
		function endRoom(){
			if(x===1 && y===4 && torchPlaced===true && endRoom_visited===0){
				var msg=("You are outside. You win!");
				updateText(msg);
				endRoom_visited=endRoom_visited+1;
				score=score+5;
				currentLocation="endRoom";
			}else if(x===1 && y===4 && torchPlaced===true){
				var msg=("You are outside. You win!");
				updateText(msg);
				endRoom_visited=endRoom_visited+1;
				currentLocation="endRoom";
			}	
		}
		//adds torch to the inventory
        function takeTorch(){
			if(x===0&&y===-2){
				inventory[0]="torch";
				var msg=("You pick up a torch. Though it does not seem to illuminate your way");
				updateText(msg);
				}
			}
		//places the torch and allows access to the other 3 locations
		function placeTorch(){
			if(currentLocation==="skeletonRoom"){
				var msg=("You put the torch in the skeleton's hands. A door to the west opens up. ")
				updateText(msg);
				torchPlaced=true;
				document.getElementById("west_button").disabled=false;
				inventory[0]="nothing"
			}
		}
		//picks up bone 
		function takeBone(){
			if(currentLocation==="skeletonRoom"){
			inventory[1]="bone"
			var msg=("you snap off the bone from the skeleton");
			updateText(msg);
			}
		}
		//throws bone to rabid dog like creature
		function tossBone(){
			if(currentLocation==="ceilingRoom"){
			boneThrown=true;
			var msg=("you take the bone from your backpack and throw it. The hellspawn thing starts gnawing on it. ");
			updateText(msg);
			document.getElementById("east_button").disabled=false;
			inventory[1]="nothing"
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
		//I do not know why this check boundary function is not working.
		/*
		function boundariesText(){
			if((currentLocation != "treasureRoomTwo") 
			|| (currentLocation != "treasureRoom") 
			|| (currentLocation != "blackRoom") 
			|| (currentLocation != "startRoom") 
			|| (currentLocation != "torchRoom") 
			|| (currentLocation != "darkHall") 
			|| (currentLocation != "skeletonRoom") 
			|| (currentLocation != "emptyRoom")
			|| (currentLocation != "hallTwo")
			|| (currentLocation != "ceilingRoom")
			|| (currentLocation != "mossyRoom")
			|| (currentLocation != "skeletonRoom")){
				var msg=("You walk into a wall and fall unconcious. You wake up in the first room");
				updateText(msg);
				x=0;
				y=0;	
			}else{
			locationCheck();
			}
		}
		*/