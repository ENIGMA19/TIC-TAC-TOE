var playone="";
var playtwo="";
var i;
var result=false;
var p1=0;
var p2=0;
function cross()
{
	playone="X";
	playtwo="O";
	console.log(playone);
	console.log(playtwo);
	 i=0;
}

function circle()
{
	playone="O";
	playtwo="X";
	console.log(playone);
	console.log(playtwo);
	i=0;
}

function clk(value1)
{
	
	
    if(i<=9)
  		{
  			switch(i)
  			{
  				case 0:
  				case 2:
  				case 4:
  				case 6:
  				case 8: 
  								result=win();
  								if(result==true)
  									{  re();
   										break;
   									}

  								if(document.getElementById(value1).innerHTML=="")
  									{
  										document.getElementById(value1).innerHTML=playone;
  										i++;
  									}
  	    						break;
  				default:
  								result=win();
  								if(result==true)
  									{   re();
  										break;
  						           }
								if(document.getElementById(value1).innerHTML=="")
  									{
  										document.getElementById(value1).innerHTML=playtwo;
  										i++;
  									}
  				
  			}

  		}
  	
}
  	function win()//winning moves
  	{		//player 1 winning moves
  		if(document.getElementById('1').innerHTML==playone && document.getElementById('2').innerHTML==playone)
  		{
  			if(document.getElementById('3').innerHTML==playone)
  	     		{
  	     			 alert("player1 wins");
  	     			 p1=1;
  	     			 return true;
  	 				
  	 			}
  		}

  		 if(document.getElementById('4').innerHTML==playone && document.getElementById('5').innerHTML==playone)
  		{
  			if(document.getElementById('6').innerHTML==playone)
  	  		 { alert("player1 wins");
  	  		   p1=1;
  	  			return true;
  	  		 }
  		

  		}


  		 if(document.getElementById('7').innerHTML==playone && document.getElementById('8').innerHTML==playone)
  		{
  			if(document.getElementById('9').innerHTML==playone)
  	     	{
  	     	 alert("player1 wins");
  	     	  p1=1;
  	     	 return true;
  	     	}
  		}

  		 if(document.getElementById('1').innerHTML==playone && document.getElementById('4').innerHTML==playone)
  		{
  			if(document.getElementById('7').innerHTML==playone)
  	     	{ 
  	     	alert("player1 wins");
  	     	 p1=1;
  	     	 return true;
  			}
  		}

  			 if(document.getElementById('2').innerHTML==playone && document.getElementById('5').innerHTML==playone)
  		{
  			if(document.getElementById('8').innerHTML==playone)
  	     	{ 
  	     	alert("player1 wins");
  	     	 p1=1;
  	     	 return true;
  	     	}
  		}


  		 if(document.getElementById('3').innerHTML==playone && document.getElementById('6').innerHTML==playone)
  		{
  			if(document.getElementById('9').innerHTML==playone)
  	     	{
  	     	 alert("player1 wins");
  	     	  p1=1;
  	     	 return true;
  			}
  		}

  		 if(document.getElementById('1').innerHTML==playone && document.getElementById('5').innerHTML==playone)
  		{
  			if(document.getElementById('9').innerHTML==playone)
  	    	 { 
  	    	 	alert("player1 wins");
  	    	 	  p1=1;
  	    	 	 return true;
  	    	 }
  		}

  		 if(document.getElementById('3').innerHTML==playone && document.getElementById('5').innerHTML==playone)
  		{
  			if(document.getElementById('7').innerHTML==playone)
  	     	{ 
  	     		alert("player1 wins");
  	     		 p1=1;
  	     		return true;
  	     	}
  		}

 //player 2 winning moves
 		 if(document.getElementById('1').innerHTML==playtwo && document.getElementById('2').innerHTML==playtwo)
  		{
  			if(document.getElementById('3').innerHTML==playtwo)
  	     	{
  	     	alert("player2 wins");
  	     	  p2=1;
  	     	 return true;
  	     	}
  		}

  		 if(document.getElementById('4').innerHTML==playtwo && document.getElementById('5').innerHTML==playtwo)
  		{
  			if(document.getElementById('6').innerHTML==playtwo)
  	     {
  	     	alert("player2 wins");
  	     	  p2=1;
  	     	 return true;
  	     }
  		}


  		 if(document.getElementById('7').innerHTML==playtwo && document.getElementById('8').innerHTML==playtwo)
  		{
  			if(document.getElementById('9').innerHTML==playtwo)
  	    {
  	    	alert("player2 wins");
  	    	  p2=1;
  	    	 return true;
  	    }
  		}

  		 if(document.getElementById('1').innerHTML==playtwo&& document.getElementById('4').innerHTML==playtwo)
  		{
  			if(document.getElementById('7').innerHTML==playtwo)
  	    	{
  	    		alert("player2 wins");
  	    		 p2=1;
  	    		return true;
  	    	}
  		}

  		 if(document.getElementById('2').innerHTML==playtwo && document.getElementById('5').innerHTML==playtwo)
  		{
  			if(document.getElementById('8').innerHTML==playtwo)
  	   		 {
  	   		 	alert("player2 wins");
  	   		 	  p2=1;
  	   		 	 return true;
  	   		 }
  		}

  		 if(document.getElementById('3').innerHTML==playtwo && document.getElementById('6').innerHTML==playtwo)
  		{
  			if(document.getElementById('9').innerHTML==playtwo)
  	    	{
  	    	alert("player2 wins");
  	          p2=1;
  	         return true;
  	    	}
  		}

  		 if(document.getElementById('1').innerHTML==playtwo && document.getElementById('5').innerHTML==playtwo)
  		{
  			if(document.getElementById('9').innerHTML==playtwo)
  	    	{
  	    		alert("player2 wins");
  	    		  p2=1;
  	    		 return true;
  	    	}
  		}

  		 if(document.getElementById('3').innerHTML==playtwo && document.getElementById('5').innerHTML==playtwo)
  		{
  			if(document.getElementById('7').innerHTML==playtwo)
  	    	{
  	    		alert("player2 wins");
  				  p2=1;
  				 return true;
  			}
  
  	    }

  	    	if((p1===0)&&(p2===0))
  	    	{
  	    		if(i==9)
  	    		{
  	    			alert("ITS A DRAW");
  	    			i++;
  	    			return true;
  	    		}
  	    	}
}

function re()
{
	playone="";
	playtwo="";
	i=0;
     result=false;
	 p1=0;
	 p2=0;
     for(var k=1;k<=9;k++)
	 document.getElementById(k).innerHTML="";
}
