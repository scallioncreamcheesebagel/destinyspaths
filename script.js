var count = -1;
var ab = 0;
var chime = new Audio('assets/sound/419493__plasterbrain__bell-chime-alert.flac');
var squeak = new Audio('assets/sound/349351__fairhavencollection__dog-toy.wav');
var path = 0;
var galehappy = 0;
var debugvar = "startout";
debug.innerHTML = count;

var clockbg = "url('assets/bg/zphclockbg.jpg')";
var meetbg = "url('assets/bg/zphmeetbg.jpg')";
var sevenbg = "url('assets/bg/zphmeetbg.jpg')";
var sevenblurrybg = "url('assets/bg/zphmeetblurbg.jpg')";
var sevenblurriestbg = "url('assets/bg/zphmeetblurriestbg.jpg')";
var rainybg = "url('assets/bg/zphrainy1.jpg')";
var bathbg = "url('assets/bg/zphbathbg.jpg')";
var bathdarkbg = "url('assets/bg/zphbathdark.jpg')";
var livingroombg = "url('assets/bg/zphlivingroombg1.jpg')";
var afternormalbg = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/A_good_afternoon_%286933189752%29.jpg/1200px-A_good_afternoon_%286933189752%29.jpg')";
var afterrbbg = "url('https://i.postimg.cc/66S6tkqR/image.jpg')";
var sunsetnormalbg = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sunset_Sky_Wallpaper_%285080737981%29.jpg/1280px-Sunset_Sky_Wallpaper_%285080737981%29.jpg')";
var sunsetrbbg = "url('https://i.postimg.cc/c1KgRM8R/image.jpg')";
var sandbg = "https://wallpapers.com/images/featured/desert-background-ascjpm9tdrcqr4ry.jpg";
var gulchbg = "https://free4kwallpapers.com/uploads/originals/2018/03/03/fall-has-arrived-in-colorado-gulch-wallpaper.jpg";
var festivalbg = "https://i.pinimg.com/originals/2e/c1/6a/2ec16a9e208538b5b236d3c25a7da385.jpg";
var ruinsbg = "https://cdna.artstation.com/p/assets/images/images/010/140/570/large/rishiraj-singh-shekhawat-desertruins.jpg?1522786077";

function start() {
  texty.innerHTML = "Destiny's Paths<br><br>A visual novel by Team Original Characters<br><br>Content warning: violence and blood";
  spriteimg.src = "";
  leftsprite.src = "";
  rightsprite.src = "";
  gamebg.style.backgroundImage = clockbg;
  A.style.display = "none";
  B.style.display = "none";
  count = -1;
  ab = 0;
  next.innerHTML = "Next";
  skip.style.display = "block";
  // debug.innerHTML = count;
}

start();

function aClick() {
  ab = 1;
}

function bClick() {
  ab = 2;
}

function skipClick() {
  if (count < 2) {
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.style.display = "block";
    B.style.display = "block";
    count = 1;
  }
  else if (count < 34) {
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.style.display = "block";
    B.style.display = "block";
    gamebg.style.backgroundImage = sevenbg;
    leftsprite.src = "";
    spriteimg.src = "";
    rightsprite.src = "";
    count = 34;
  }
  else if (count < 54) {
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.style.display = "block";
    B.style.display = "block";
    gamebg.style.backgroundImage = sevenbg;
    leftsprite.src = "";
    spriteimg.src = "";
    rightsprite.src = "";
    count = 54;
  }
  else if (count < 61 && path === 2) {
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.style.display = "block";
    B.style.display = "block";
    gamebg.style.backgroundImage = afternormalbg;
    leftsprite.src = "";
    spriteimg.src = "";
    rightsprite.src = "";
    B.style.fontSize = "13pt";
    count = 61;
  }
  else if (count < 201) {
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.style.display = "block";
    B.style.display = "block";
    gamebg.style.backgroundImage = sevenbg;
    leftsprite.src = "";
    spriteimg.src = "";
    rightsprite.src = "";
    B.style.fontSize = "18pt";
    next.innerHTML = "Next";
    count = 201;
  }
  nextClick();
}

function nextClick() {
  debugvar = "in function";
  if (galehappy === 0) {presgaleneutral = "";}
  else {presgaleneutral = "";}
  if (count === -1) {
    texty.innerHTML = "Why do we tell stories?<br><br>Out of some kind of didacticism, a means to convey data and instruction?<br><br>Out of some urge for pattern recognition, picking and choosing different pieces to put together into a satisfying whole?<br><br>Out of some kind of love, a drive to create a piece of art that will invoke wonder and appreciation in those who imbibe it?<br><br>Or is it out of some kind of need for human connection, a desire to know that we aren’t alone?";
  }
  else if (count === 0) {
    texty.innerHTML = "For that matter, why are you here?";
    next.disabled = "disabled";
    next.style.opacity = "0%";
    chime.play();
    A.innerHTML = "...Wait, me?";
    B.innerHTML = "I’m involved in this?";
    A.style.display = "block";
    B.style.display = "block";
  }
  else if (count === 1) {
    skip.style.display = "none";
    texty.innerHTML = "Yes, you.<br><br>Storytelling is a song with at least two parts.<br><br>While there is joy in the act of creation, a story unwritten is just a daydream, a story unshared is a static block of text. No instruction can be learned without a student, no love can be engendered without an audience, no connection can be formed without another party.<br><br>To breathe life into the motionless body of a work, you are a vital component, my dear Reader.";
    chime.play();
    A.innerHTML = "Okay, I see that.";
    B.innerHTML = "If you say so.";
  }
  else if (count === 2) {
    skip.style.display = "block";
    A.style.display = "none";
    B.style.display = "none";
    next.disabled = "";
    next.style.opacity = "100%";
    if (ab === 1) {
      texty.innerHTML = "Ah, glad we are in agreement.<br><br>We come from a tradition millenia old, from the courts of Heian Japan, from the amphitheaters of ancient Greece, from the rich river delta of Mesopotamia, and from countless older tales that predate the means to record them.<br><br>By being passed through the generations, many of these stories are still beloved in the hearts of many to this day.";
    }
    else {
      texty.innerHTML = "Not quite sold, hm?<br><br>Well, bear in mind that the act of storytelling is a tradition millenia old, from the courts of Heian Japan, from the amphitheaters of ancient Greece, from the rich river delta of Mesopotamia, and from countless older tales that predate the means to record them.<br><br>Were there no audiences to partake in their stories, none of them would live in the hearts of many to this day.";
    }
  }
  else if (count === 3) {
    texty.innerHTML = "There are rules to this dance between the Reader and the Author, a set of expectations that can be respected or subverted. We have already committed to dozens of these, simply by where you found this link and your clicking through dialog windows in your web browser.<br><br>One such promise is that the narrative will have a payoff. That there will be a conflict that follows this exposition, and that will string along a series of events that leads to an emotional climax, a resolution to the conflict, and a denouement.<br><br>The Author has many tools in their employ to make this happen; We are free to shape the world as they need to, to generate the actors that will play out the events-to-be. An infinite number of possibilities spring forth from their omnipotence over the empty page, and our art is pruning this infinity into a satisfying narrative form.<br><br>To those subject to the page rather than sovereign to it, this fixed path the Author has sewn, this fated providence, could be called <b id='destiny'>destiny</b>.";
  }
  else if (count === 4) {
    texty.innerHTML = "So, how about I tell you a new story?";
    next.disabled = "disabled";
    next.style.opacity = "0%";
    chime.play(); 
    A.innerHTML = "Yeah!";
    B.innerHTML = "Alright!";
    A.style.display = "block";
    B.style.display = "block";
  }
  else if (count === 5) {
    gamebg.classList.add("elementToFadeOut");
    setTimeout(function(){
      gamebg.style.backgroundImage = "";
      gamebg.classList.remove("elementToFadeOut");
      if (count > 6) {
        gamebg.style.backgroundImage = meetbg;
      }
    }, 1000);
    A.style.display = "none";
    B.style.display = "none";
    next.disabled = "";
    next.style.opacity = "100%";
    texty.innerHTML = "The room is dark.<br><br>No hint of light pierces the emptiness, though turning to your other senses you faintly make out the odor of stale coffee, mildew, and old paper. The air feels crisp and cold on your lips, the low rumbling of an air conditioning unit somewhere in the distance.";
  }
  else if (count === 6) {
    gamebg.style.backgroundImage = meetbg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "As though willed out of the void, a set of 6 assorted chairs are illuminated in front of you. They feel as though they are inviting you to take a seat, but a voice in your head tells you to wait.";
  }
  else if (count === 7) {
    spriteimg.src = presgalefrusupset;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "You hear the sound of a shoe catching on metal and a loud crashing before you see her. Brought into the light, you see the back of a woman laying face-down on the floor. She groans audibly and rubs her gloved hand on her face, laying there for a good few moments before hoisting herself into the chair, a plain bowl of plastic held up by spindly metal legs.<br><br>You can get a much better look at her now that her face isn’t glued to terra-firma. Her dark eyes are framed by her shaggy hair on the top and sides and by purple eyebags on the bottom. She sits on the very corner of the chair with her head on a swivel, constantly checking left and right for new entrants from the darkness.";
  }
  else if (count === 8) {
    spriteimg.src = sajaneualert;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Movement in your peripheral draws your attention to the other end of the room. A raven sits perched on the backrest of one of the chairs, head moving in swift, sudden bursts to scan the room with emerald-green eyes. More ravens flutter into the light, to a total of twelve, joined by a young woman dressed in a black hoodie and jeans.<br><br>She makes eye contact with the other woman and with you. It feels more like a glare than a look. Only her left eye is visible, the other hidden under hair. The color matched the birds’. She sits down with crossed arms and one leg folded over the other, while the birds gather under and around the chair. One raven remained on her knee and focused its attention on you.";
  }
  else if (count === 9) {
    spriteimg.src = anaperplexed;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Another woman phases into the room, sitting in the air slightly above a chair before falling into place. For a brief moment, a ball of light was beside her face, but it had disintegrated by the time she fully came into being. Her round face is framed by frizzy auburn hair loosely tied into a single braid, wearing a peach patterned sundress and a pair of house slippers. In her right hand is a magnifying lens while her left hand was limply pointing at the air in front of her. She seems a bit bothered more than anything, and her deep red eyes make contact with yours for half a second before she looks away in silence.";
  }
  else if (count === 10) {
    spriteimg.src = "";
    leftsprite.src = cathysurprised;
    rightsprite.src = ananeutral;
    leftsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      leftsprite.style.opacity = 1;
      leftsprite.classList.remove("elementToFadeIn");
    }, 1000);
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "To this woman's right, someone else soon appears. She is short and slim with short brown hair and glasses, wearing a cream button-up shirt and a pair of denim pants held up with some suspenders. Her work boots are very well worn. Her posture is slouched, propping an open book with a cloth hard cover on her knee, but as she becomes more aware of her surroundings, she starts to sit up straight in her chair while her gaze moves towards her left.";
  }
  else if (count === 11) {
    leftsprite.src = cathysmile;
    rightsprite.src = anasmile;
    //no fadein
    texty.innerHTML = "Both the women's eyes light up when they see each other. They begin making small talk as if you weren't there. You can only make out a few mutterings of their conversation: \"And I was so focused on my work, too.\" \"I was on break anyway.\" \"It's so cold in here.\"<br><br>You could have sworn you saw a third person arrive at the scene in a chair behind these two, having caught a glimpse of a baseball cap and blonde hair, but whoever they were is out of sight by now.";
  }
  else if (count === 12) {
    leftsprite.src = "";
    rightsprite.src = "";
    spriteimg.src = toraneutral;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Most of the chairs have been accounted for at this point, but two still stand empty. You look around a bit, wondering who else these could be for, when one more woman steps into your line of sight. You start to wonder how you could have missed her, because her presence and size seems to dwarf everything around her in comparison.<br><br>She moves with purpose. The trim of her long coat <i>fwips</i> rhythmically in time with her footsteps as she walks across the room, surveying the other arrivals by looking down from her furrowed brow and not changing the angle of her head. Gold metal wiring near her temples glimmer in the light. As she passes you, you notice a saber tucked into the waistbelt of her overcoat, her left hand resting on it lightly. When she arrives at her selected chair, one with a tall back that is notably larger than the others, she turns around and sits with a level of regal elegance.<br><br>Although the chairs are arranged vaguely in a semi-circle, you somehow get the feeling that she is sitting at the metaphorical head of the table.";
  }
  else if (count === 13) {
    leftsprite.src = presgalefrusupset;
    rightsprite.src = toranodflip;
    spriteimg.src = "";
    //no fadein on tora
    leftsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      leftsprite.style.opacity = 1;
      leftsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "The first woman who entered the room, who had been jumpy at the earlier supernatural antics, seems even more nervous at this new entrant. Although, on closer inspection of her face, you could almost swear she was… blushing? Her eyes flit back and forth between this new woman and the floor.<br><br>The large woman meets the gaze of this skittish woman, which seems to soothe her nervous movements. The large woman nods silently, a single smooth movement with an air of authority. The skittish woman nods in return, but she does so quickly and several times over before returning to scanning her surroundings.";
  }
  else if (count === 14) {
    leftsprite.src = presgaleneutral;
    rightsprite.src = torasmugflip;
    //no fadein
    texty.innerHTML = "You aren’t completely sure what’s going on, but you get the sense some agreement has been forged.";
  }
  else if (count === 15) {
    leftsprite.src = "";
    rightsprite.src = "";
    spriteimg.src = avanervous;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "You hear something hard hit the floor repeatedly. As you locate the sound, you see a tall woman with white hair approach the circle, likely to fill in the last seat. She used a long black rod to feel out her path. It looked to be made out of solid rock, but she wielded it as easily as if it were light plastic.<br><br>She wore a wide-brimmed witch hat and a long coat over a short gothic dress and shirt. Her eyes were hidden behind colored glasses, one side red, the other yellow.";
  }
  else if (count === 16) {
    spriteimg.src = avacoatsmile;
    //no fadein
    texty.innerHTML = "“Hello everyone! My name is Ava Mara LeClercq, nice to meet you all. Though I have no idea where I am and how I got here,” the witch announced.";
  }
  else if (count === 17) {
    leftsprite.src = avacoatsmile;
    rightsprite.src = sajaneutral;
    spriteimg.src = "";
    //no fadein on ava
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“You can sit next to me.”";
  }
  else if (count === 18) {
    texty.innerHTML = "You notice that the raven woman’s face lit up a little when noticing the witch. Then a grotesquely long tongue stretched out of her mouth, coiled around the witch’s free wrist and guided her to the empty chair.";
  }
  else if (count === 19) {
    leftsprite.src = avacoatworried;
    texty.innerHTML = "“You’re here too, Saja?” Ava asked, following Saja’s guidance. “That’s a bit of a relief. We aren’t dead, right? Did we enter the Horrid Strife?”";
  }
  else if (count === 20) {
    rightsprite.src = avasmile;
    texty.innerHTML = "Ava takes off her coat, folds it and hangs it over the chair’s backrest, before sitting down.";
  }
  else if (count === 21) {
    texty.innerHTML = "“I dunno,” Saja replied. “But all the seats are filled now, so I’m sure someone will come and explain soon.”";
  }
  else if (count === 22) {
    texty.innerHTML = "She said that as if she’s been in such a situation a dozen times before. She’s looking over to you again, expecting you to be the one in charge here, standing so ominously off to the side.";
  }
  else if (count === 23) {
    texty.innerHTML = "She absolutely has a point, though.<br><br>You look around, eyes running from woman to woman in their respective seats. Every chair seems to be accounted for. As though released from a spell, you remember that you had wanted to secure a seat, but had chosen to hold back.<br><br>Well, it’s too late now. And you still aren't quite sure how you fit into all this, either.<br><br>You scratch your head and give a noncommittal shrug.";
  }
  else if (count === 24) {
    leftsprite.src = "";
    rightsprite.src = "";
    spriteimg.src = ananeutral;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "You could feel the silence of the room lingering for about a second too long before anybody else brings themselves to speak up. The voice of the woman in the peach sundress is high-pitched yet soft, and she calmly says, \"Well, if we're still making our introductions, I'm Ana de Soie, assistant researcher for the Mayvale Archaeological Society, Indigenous Cultures Division.\"";
  }
  else if (count === 25) {
    spriteimg.src = "";
    leftsprite.src = phoenixannoyed;
    rightsprite.src = ananeutral;
    game.style.backgroundImage = meetbg;
    gamebg.style.backgroundImage = sevenbg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);
    leftsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      leftsprite.style.opacity = 1;
      leftsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Apparently, this was enough to bring the blonde woman out of hiding. As she leaves the shadows, a new chair materializes near those of Phoenix and Ana.<br><br>You have a better look at her now, wearing part of a baseball uniform and a pair of cut-off jean shorts. \"Read the room, Ana.\" Her cadence feels more like that of a brooding teenage boy. \"We got displaced into a different plane of reality. Nobody else here is going to know what that is. You can't just go sharing unnecessary information with strangers this freely.\"";
  }
  else if (count === 26) {
    rightsprite.src = cathyneutral;
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "The woman in glasses turns around in her seat. \"You could have spoken up sooner if you were here with us all this time, you know.\" She turns her head more towards you and continues, \"Anyway, I'm Cathy Vaughn, I work in radio communications.\"";
  }
  else if (count === 27) {
    leftsprite.src = phoenixangry;
    texty.innerHTML = "The blonde lets out a bitter groan. \"They don't need to know all that!\"";
  }
  else if (count === 28) {
    leftsprite.src = phoenixannoyed;
    texty.innerHTML = "Unfazed by the outburst, Cathy speaks again. \"Our friend here is Phoenix. Don't mind them, sometimes they just feel like starting drama for no reason.\"<br><br>Phoenix leans forward onto their associate's headrest. \"Thanks for the charming introduction. That's all you have to say about me?\"<br><br>\"I figured you wouldn't want me saying anything more than I need to,\" says Cathy.";
  }
  else if (count === 29) {
    leftsprite.src = phoenixback;
    texty.innerHTML = "Phoenix sighs and turns away, crossing their arms. \"Yeah, whatever.\"";
  }
  else if (count === 30) {
    leftsprite.src = "";
    rightsprite.src = "";
    texty.innerHTML = "A booming voice echoes through the room. It seems to come from everywhere and nowhere, loud enough to demand attention, but not powerful enough to overwhelm.<br><br>The gathered women look around in confusion.<br><br>“You may be wondering what has brought you here, and why.”<br><br>There are various murmurs of agreement, and one loud affirmative, “YEAH!”";
  }
  else if (count === 31) {
    texty.innerHTML = "The voice continues,<br><br>“You have been selected because your lives are, in some aspects, peak representations of <b>love</b>. Your endeavors embody the passions that humans deeply wish to see, that which makes other’s emotions boil over in sympathy.<br><br>“The persistent desire for affectations that cannot be acted upon, the innate melancholy of yearning with a glimmer of hope embedded within it.<br><br>“The angst of wants denied by circumstance, the nostalgia for things that were, but have come to pass. <br><br>“And of course, the happiness at the core of it all. The way the world is shaped differently when looking through the eyes of someone you love, the joys of familiarity and the comforts of the mundane.”";
  }
  else if (count === 32) {
    texty.innerHTML = "“Now, in the spirit of these endeavors, my collaborators and I have decided to stage a little <b>competition</b>.<br><br>“To determine which of those among you are most worthy of these accolades, we will host the first <b>Y</b>early <b>S</b>cribe <b>O</b>lympics.”";
  }
  else if (count === 33) {
    spriteimg.src = avaquestion;
    texty.innerHTML = "“Um, excuse me!”<br><br>You see a hand raised and follow it back to Ava.<br><br>“I think there must be a mistake then, I’m not a scribe!”";
  }
  else if (count === 34) {
    spriteimg.src = "";
    skip.style.display = "none";
    next.disabled = "disabled";
    next.style.opacity = "0%";
    chime.play();
    A.innerHTML = "The \"Scribe\" is about...";
    B.innerHTML = "(Stay your tongue) ";
    A.style.display = "block";
    B.style.display = "block";
    texty.innerHTML = "You realize that the others here must not have had the same conversation directly with The Author that you had.<br><br>Maybe you can help clear this up for them? ";
  }
  else if (count === 35) {
    skip.style.display = "block";
    next.disabled = "";
    next.style.opacity = "100%";
    A.style.display = "none";
    B.style.display = "none";
    if (ab == 1) {
      texty.innerHTML = "You start to say, \"They're saying that—\"<br><br>The booming voice seems to come from within your head now. \"This is not the time for that.\"<br><br>They have a point. Everyone is confused enough by this multiverse crossover event, you don't need to throw in an existential crisis about being fictitious on top of that.";
    }
    else {
      texty.innerHTML = "You decide to hold back, letting The Author decide how to steer the conversation.<br><br>Besides, it seems that everyone is confused enough by this multiverse crossover event, you don't need to throw in an existential crisis about being fictitious on top of that.";
    }
  }
  else if (count === 36) {
    texty.innerHTML = "\"The name,\" The Author's booming voice continues, \"is in reference to the one standing among you, more so than for anyone else here.\"<br><br>Ten eyes turn to look at you. The woman with a witch's hat and two-tone glasses is the only participant who doesn't turn in your direction, but her posture seems to indicate listening intently.<br><br>\"They are here as the one responsible for scoring this competition today. The neutral observer to your shared <b id='destiny'>destiny</b>.<br><br>“Now, for us to proceed in this competition, you will need to divide yourself into two teams.” As they speak the second half of that sentence they slow down and enunciate their words clearly, as though to underline their words.";
  }
  else if (count === 37) {
    texty.innerHTML = "The room is silent for a moment as everyone drinks in what all this means.";
  }
  else if (count === 38) {
    spriteimg.src = toraboast;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "The momentary silence is broken by the large woman who still hadn’t said a single word up till now. Her words echo in a manner reminiscent of the booming voice that just spoke.<br><br>   “Any of those among you who desire triumph <br>   through conquest, seek assurance under my banner.<br>   Though alleged “love” tales most dreadful are not my domain, it will<br>   be by the hands of Tora unyielding that fate, wrestled <br>   stoutly from the very stars above, will concede our<br>   due success, as escorted by the goddess of victory.”<br><br>There is a brief silence as everyone takes in what she said.";
  }
  else if (count === 39) {
    spriteimg.src = "";
    leftsprite.src = presgaleneutral;
    rightsprite.src = torasmugflip;
    leftsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      leftsprite.style.opacity = 1;
      leftsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“I can vouch for her,” a voice you haven’t heard before pipes up. You realize it came from the timid woman who recognized the giver of this boisterous speech upon entering the room. <br><br>“I’ve worked with her in the past. Her Family is the only one to successfully lay inroads in Bay City in the past fifty years.” Though she speaks with confidence, you can tell there is something she’s trying to hide on her face. Something in that spiel caught her off-guard.<br><br>She gets up and stands to the side of Tora. “I will follow you.”<br><br>Tora nods. “Dear Gale, dutiful messenger, your allegiance is welcomed.”";
  }
  else if (count === 40) {
    leftsprite.src = phoenixneutral;
    rightsprite.src = ananeutral;
    leftsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      leftsprite.style.opacity = 1;
      leftsprite.classList.remove("elementToFadeIn");
    }, 1000);
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "After Gale's affirmation of Tora's speech, two women start to get out of their seats at the same time. However, only one was quick enough to say her piece first.";
  }
  else if (count === 41) {
    texty.innerHTML = "\"I'll join your team, if you'll have me,\" Ana says with her hands clasped in front of her and bowing forward slightly before she walks off with a straightened posture.";
  }
  else if (count === 42) {
    leftsprite.src = torasmug;
    texty.innerHTML = "Tora nods and holds a hand out in welcome. “Studies of eons past will no doubt be invaluable.”";
  }
  else if (count === 43) {
    rightsprite.src = "";
    leftsprite.src = phoenixannoyed;
    texty.innerHTML = "Phoenix sits back down, and slinks even further back in their chair as Cathy gets up to follow Ana towards Tora's side. They mutter something to themself, but it wasn't anything you could clearly make out.";
  }
  else if (count === 44) {
    leftsprite.src = "";
    spriteimg.src = avaneutral;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“Guess we remaining ones will be the other team then, so it’s somewhat even?” Ava figured. <br><br>She then stood up and tried to match Tora as team leader, thought it was clear she had no idea what she was doing:<br><br>   “I will guide you to victory, in the name of love<br>   and friendship. Uh… We’ll-”";
  }
  else if (count === 45) {
    spriteimg.src = "";
    leftsprite.src = avaunsure;
    rightsprite.src = sajaannoyed;
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“Sit back down, you’re being a fool.” Saja commanded and Ava saw reason and fell back on her chair.<br><br>“You’re the songwriter, do you have something better?”<br><br>“No, I think we’re good.”";
  }
  else if (count === 46) {
    leftsprite.src = avaneutral;
    rightsprite.src = sajaneutral;
    texty.innerHTML = "Saja looked over to Phoenix. “So, you are…”<br><br>“That’s Phoenix, Saja.” Ava answered and leaned forward in Phoenix’ direction. “Welcome to our team!”";
  }
  else if (count === 47) {
    leftsprite.src = "";
    rightsprite.src = "";
    spriteimg.src = phoenixidle;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Phoenix looks over Saja and Ava as they adjust their cap. With a nod, they say, \"Yep, it's for the best that we ended up as a team,\" as they prop their legs up into Ana's empty chair. \"If I'd gone with Pecs over there, her team would've been too powerful. There'd be no competition! Where's the fun in that?\"";
  }
  else if (count === 48) {
    spriteimg.src = toraboast;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Tora laughs, an expression that on most other people would come across as a sensible chuckle, but is much deeper in gravitas when coming from her.<br><br>   “We can truly declare this an earnest contest when we<br>   speak primarily of honor. In the deep trenches<br>   of politics, the deck would already be stacked.”<br><br>She scans the women to her sides before looking out into the void and addressing the bodiless voice directly,<br><br>   “The alliance led by Tora of boundless ambition<br>   is prepared for the myriad challenges forthcoming.”";
  }
  else if (count === 49) {
    spriteimg.src = "";
    texty.innerHTML = "The voice responds, “Very well.”<br><br>“This competition will consist of three rounds. Within each round, a subset of you will be sent back to your native lands to ‘fill’ a specified series of events.”<br><br>You think to yourself, the Author seems to be dancing around the specific phrase, but it sounds like the characters are meant to fulfill the destiny of their original canon.<br><br>“You will be given a one-word ‘prompt’ as a clue for what you are meant to do.”";
  }
  else if (count === 50) {
    texty.innerHTML = "“The prompt for the first round is <i>'Growth'.”</i>";
  }
  else if (count === 51) {
    leftsprite.src = sajaneutral;
    rightsprite.src = avaneutral;
    leftsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      leftsprite.style.opacity = 1;
      leftsprite.classList.remove("elementToFadeIn");
    }, 1000);
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "The Author let the women think that word over before continuing.<br><br>“Saja and Ava, this round will fall to you. In particular to Saja, who has gone through a lot of growth, but sometimes fought tooth and nail against it.”<br><br>Saja looked a bit confused as she tried to puzzle out what she was expected to do. She usually doesn’t show her emotions that openly on her face.<br><br>Ava smiled as if all of this made perfect sense to her.";
  }
  else if (count === 52) {
    leftsprite.src = presgalefrusupset;
    spriteimg.src = ananeutral;
    rightsprite.src = toraneutralflip;
    spriteimg.style.opacity = "50%";
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    leftsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      leftsprite.style.opacity = 1;
      leftsprite.classList.remove("elementToFadeIn");
    }, 1000);
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“And for our other team, the one led by ‘Tora of boundless ambition’.” Though the Author keeps their voice even, you could swear you hear a hint of sarcasm in those words.<br><br>Tora keeps her gaze forwards, but Gale and Ana look at each other.<br><br>“Gale, step forward.”<br><br>Gale looks left and right, as though she could somehow get the Author to call out one of her teammates. “Me? Like, just me?”<br><br>“Yes. There are some lessons that must be learned alone.”";
  }
  else if (count === 53) {
    spriteimg.style.opacity = "100%";
    leftsprite.src = presgaleneutral;
    rightsprite.src = toranodflip;
    texty.innerHTML = "Gale looks up to Tora for encouragement. Though she doesn’t offer another speech in encouragement, she gives another firm nod, which seems to be enough to encourage her.<br><br>She steps forward, summoning resolve from somewhere. “Alright, I’m ready.”";
  }
  else if (count === 54) {
    next.disabled = "disabled";
    next.style.opacity = "0%";
    chime.play(); 
    A.innerHTML = "Saja & Ava";
    B.innerHTML = "Gale";
    A.style.display = "block";
    B.style.display = "block";
    skip.style.display = "none";
    leftsprite.src = sajaneutral; 
    spriteimg.src = avaneutral; 
    rightsprite.src = presgaleneutralflip;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
  leftsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      leftsprite.style.opacity = 1;
      leftsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“So, reader. Which team do you choose?”";
  }
  else if (count === 55 && ab === 1) {
    path = 1;
    rightsprite.src = "";
    next.disabled = "";
    next.style.opacity = "100%";
    A.style.display = "none";
    B.style.display = "none";
    skip.style.display = "block";
    texty.innerHTML = "“So, what do we do now?” Saja asks the void.<br><br>“Like I mentioned, you will be sent back to your home to fulfill the events hinted at by the prompt. I’ve picked the time and place. It is one where Saja could have experienced growth, but hadn’t. Maybe with a little nudging, that moment could have played out another way.”<br><br>“So you can send us back in time?” Saja asks.<br><br>“No, I’m not a time traveler, but it may look to you that way.”";
  }
  else if (path === 1 && count === 56) {
    texty.innerHTML = "You imagine the Author wouldn’t like to dwell on this line of thought, so they quickly address you.<br><br>“Now, let me provide some context for our observer. They are not from your world after all. <br><br>This is the planet named Vinland. It is inhabited by many intelligent species, most recently joined by humans from planet Earth. Unlike Vinland’s natives, humans are very advanced when it comes to science and technology, but didn’t even know magic was a thing. At this point in time, humans and Vinlanders are working together and learning from each other.<br><br>On Vinland, people can form pacts with distant deities to gain additional abilities and augmented bodies. In return they have to perform certain tasks, usually services to society.”";
  }
  else if (path === 1 && count === 57) {
    leftsprite.src = "";
    rightsprite.src = "";
    spriteimg.src = sajaneutral;
    texty.innerHTML = "The light of the room hones in on Saja.";
  }
  else if (path === 1 && count === 58) {
    texty.innerHTML = "“Saja is a young adventurer. She was the first human to learn of magic and became a frost and sound mage.<br><br>She also made the Reaper pact, which granted her twelve animal familiars, ravens in her case. She shares a consciousness with these ravens, but they don’t necessarily process their emotions the same way. She calls these ravens 'Deadly', collectively.”";
  }
  else if (path === 1 && count === 59) {
    texty.innerHTML = "“Reapers have to seek out the dead, learn their stories and tell them in whichever way comes to them. Saja tells these stories through song. Her style ranges across various genres of rock and metal, hoping to establish that kind of music among non-humans.<br><br>She is also a Devil, who have to stay true to their ideals and beliefs and fight for them. It grants her a very long tongue and the ability to store items in a pocket dimension in her mouth.”";
  }
  else if (path === 1 && count === 60) {
    spriteimg.src = sajaannoyed;
    texty.innerHTML = "“Yeah, that’s me... I guess.” Saja comments.";
  }
  else if (path === 1 && count === 61) {
    spriteimg.src = avasmile;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "The light switches over to Ava.";
  }
  else if (path === 1 && count === 62) {
    texty.innerHTML = "“Ava is a so-called Fleshless, a bodyless soul that can possess others. She was created by the evil god Solerel and committed many evil acts in her service. She eventually began to question Solerel, though.”";
  }
  else if (path === 1 && count === 63) {
    spriteimg.src = avanervous;
    texty.innerHTML = "“You could... break it down like that. I suppose.”";
  }
  else if (path === 1 && count === 64) {
    texty.innerHTML = "“After Solerel was defeated and killed, Ava narrowly survived and further developed her beliefs in her absence. Ava was given her own body to inhabit, but she had to trade in her ability to exit the body and possess others, rendering her mortal.<br><br>This body also lacked the ability to see, but her Imp pact gives her the ability to sense other people’s fields of vision and how to stay out of it, allowing her to somewhat locate people in her vicinity. Imps are required by their god to play pranks on people and annoy them.”<br><br>“Don’t forget, I’m a rock mage!” Ava adds. “Though I mostly just use it to make trinkets and decorations.";
  }
  else if (path === 1 && count === 65) {
    spriteimg.src = "";
    game.style.backgroundImage = sevenbg;
    gamebg.style.backgroundImage = sevenblurrybg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“During the fight against Solerel five years ago, Saja’s best friend Marvjad was killed. Ava considered Marvjad a friend at that point too and both feel partially responsible for her death.”";
  }
  else if (path === 1 && count === 66) {
    game.style.backgroundImage = sevenblurrybg;
    gamebg.style.backgroundImage = sevenblurriestbg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“Now, Saja got into a fight with most of her friends, leaving only one person to turn to...”";
  }
  else if (path === 1 && count === 67) {
    game.style.backgroundImage = sevenblurriestbg;
    gamebg.style.backgroundImage = rainybg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);
    spriteimg.src = sajasoakedsad;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "You stand outside. The sun hasn’t yet fully set, but got banished from sight by thick rain clouds, their contents battering the ground. You feel the rain soaking into your clothes, cooling down your skin, your hair stuck to your skull and water running down your face. At the same time, it doesn’t really bother you, because it’s more like you empathize with the sensation rather than it really happening to you.";
  }
  else if (path === 1 && count === 68) {
    texty.innerHTML = "As you look around, you recognize a woman from the room. Saja, you recall. Somehow, you can tell how she feels, to an extent. She is fully in her role from this moment in her time, no memories of this competition to interfere with the scene, except for whatever the Author left behind to alter the events. She ignores you, but you decide to be careful with your presence anyway.<br><br>Saja stands in front of Ava’s house. She feels like she's doubled in weight with the water soaked into her clothes, and the rain constantly dripping into her one functioning eye makes walking around out here a total pain in the ass. Still, is that enough to get her in there?";
  }
  else if (path === 1 && count === 69) {
    spriteimg.src = sajasoakedannoyed;
    texty.innerHTML = "“God damn it, why am I here? Do I really have no one else to talk to? I should just go home.” Saja thinks to herself, but you hear it still.";
  }
  else if (path === 1 && count === 70) {
    spriteimg.src = deadlysoakedsad;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Deadly senses Saja’s thoughts and caws pathetically in protest. The heavy rain made it very difficult for Deadly to fly, so all twelve of her have been hopping after Saja like ducklings.";
  }
  else if (path === 1 && count === 71) {
    spriteimg.src = sajasoakedannoyed;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Saja enters a staring contest with the birds and has to admit defeat.<br><br>“Fine.”";
  }
  else if (path === 1 && count === 72) {
    spriteimg.src = sajasoakneufist;
    texty.innerHTML = "Saja lifts a fist to knock on the door. It hovers for a moment, then knocks once before sliding off the damp wood. She couldn’t bring herself to put in more effort than that.";
  }
  else if (path === 1 && count === 73) {
    spriteimg.src = sajasoakedneu;
    texty.innerHTML = "Saja lets herself fall forward, to let her forehead perform a second knock. Before the door could catch her, it opens and her face falls onto Ava’s chest instead.";
  }
  else if (path === 1 && count === 74) {
    spriteimg.src = avasurprised;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“Oh dear, you’re all wet!”";
  }
  else if (path === 1 && count === 75) {
    spriteimg.src = avasmile;
    texty.innerHTML = "Ava puts her arms around Saja before she could steady herself and shuffles her inside. Since Ava is blind, her home is not well lit, but Saja’s eyes are already halfway used to the dark. Ava’s Deadly hops in after them and shakes the rain off her feathers.";
  }
  else if (path === 1 && count === 76) {
    spriteimg.src = avasurprised;
    texty.innerHTML = "Ava notices the sounds of Deadly fluttering inside.<br><br>“Birds? A bird reaper? Saja, is that you?”";
  }
  else if (path === 1 && count === 77) {
    spriteimg.src = sajasoakedneu;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Saja says nothing. She pushes herself free from the hug and walks further inside. She takes her hair into her hands and wrings it out right there. The water spatters onto the floor tiles.";
  }
  else if (path === 1 && count === 78) {
    spriteimg.src = avahorror;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“No! Don’t do that, you’re putting up slipping hazards in my house!” Ava scolds. “Go dry off in the bathroom, you animal.”";
  }
  else if (path === 1 && count === 79) {
    spriteimg.src = sajasoakedneu;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    game.style.backgroundImage = rainybg;
    gamebg.style.backgroundImage = bathbg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Saja finds the bathroom in the dark and the light switch by the door. The white tiles blind her and she decides she’d rather leave it dark. It fits her mood better, too.";
  }
  else if (path === 1 && count === 80) {
    spriteimg.src = sajasoakdark;
    game.style.backgroundImage = bathbg;
    gamebg.style.backgroundImage = bathdarkbg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "The short glimpse of the room was enough for Saja to have spotted the towels. She peels the wet clothes off her body and wrings them out over the bathtub. She picks one of the towels and rubs herself dry.";
  }
  else if (path === 1 && count === 81) {
    spriteimg.src = sajadark;
    texty.innerHTML = "Next, she sits down on the toilet and lets Deadly hop onto her lap so she can wrap the towel around the bird. She repeats the process with all twelve birds, until the act becomes monotonous and she loses focus, petting the last Deadly with the towel much longer than the others.";
  }
  else if (path === 1 && count === 82) {
    texty.innerHTML = "Saja’s face is once again dampened by tears. She buries her face in the towel, wedging Deadly between her head and thighs. The bird writhes herself free, allowing Saja to fully fold onto her legs, chin between her knees.";
  }
  else if (path === 1 && count === 83) {
    texty.innerHTML = "It takes her some time before it strikes her what a pathetic image she forms. Also, her back starts to hurt. She jumps to her feet, Deadly fluttering in the dark to make room for her.";
  }
  else if (path === 1 && count === 84) {
    texty.innerHTML = "Saja retrieves dry clothes from her mouth and gets dressed as fast as possible. She stuffs the wet clothes back inside and licks the tears from her eyes, though it's not like Ava could see she was crying.";
  }
  else if (path === 1 && count === 85) {
    spriteimg.src = sajaneutral;
    texty.innerHTML = "Saja exits the bathroom and tries to leave without alerting Ava. She makes it to the front door, but as soon as she opens it, the noise of the rain flooded in unfiltered and betrayed her.";
  }
  else if (path === 1 && count === 86) {
    spriteimg.src = avawonder;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“Oh, are you leaving? You’ll get drenched again,” Ava says, but not with the concern Saja expects in her voice.";
  }
  else if (path === 1 && count === 87) {
    spriteimg.src = sajaannoyed;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Saja sees the rain hammering into the ground outside. It’s not like she minds the cold, but the wet clothes clinging to her feel gross. And not being able to tell where she's going because it's dark and there's rain in her eyes constantly...";
  }
  else if (path === 1 && count === 88) {
    spriteimg.src = sajaresigned;
    texty.innerHTML = "Saja closes the door again.";
  }
  else if (path === 1 && count === 89) {
    spriteimg.src = avawonder;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“Are you still here?” Ava asks the room.<br><br>Saja walks over the living room, her unmasked footsteps serving as the answer. She flips the light switch on the way in.";
  }
  else if (path === 1 && count === 90) {
    spriteimg.src = avasmile;
    texty.innerHTML = "“I’ll make you some warm tea. I think I remember how you like it.” Ava walks over to the kitchen.";
  }
  else if (path === 1 && count === 91) {
    game.style.backgroundImage = bathdarkbg;
    gamebg.style.backgroundImage = livingroombg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);
    spriteimg.src = sajaresigned;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Saja sits down on one of the couches. Ava has enough of them to seat a full school class, though several seats are occupied by plushies. All the shelves are full of stuffed animals and other toys, too.";
  }
  else if (path === 1 && count === 92) {
    spriteimg.src = sajaneutral;
    texty.innerHTML = "Saja can see no theming here, the toys appear picked at random, with no regards to the media they're attached to. Ava probably doesn’t even know some of these are from cartoons.";
  }
  else if (path === 1 && count === 93) {
    texty.innerHTML = "To her right, there is a glass front that would show the sunrise in the morning. Right now, white light reflects off the raindrops clinging to the glass, against a pitch black canvas. The clouds block out any lingering light completely.";
  }
  else if (path === 1 && count === 94) {
    spriteimg.src = sajasadsmile;
    texty.innerHTML = "Saja missed many winters while living underground in Amiredetta, and her travels usually took her to the warmer areas of the world. She hopes the rain will turn to snow soon. It’s been too long since she felt it crunch beneath her feet. Seen the snow-covered fields, the gray-clouded sky and the black, skeletal trees.";
  }
  else if (path === 1 && count === 95) {
    spriteimg.src = "";
    leftsprite.src = sajasadsmile;
    rightsprite.src = avaneutral;
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Ava finishes bringing the tea cups and kettle over and sits down next to Saja, which pulls her back into the room. She scoots a few spots away from her, and Ava makes no comment of it as she fills their cups.";
  }
  else if (path === 1 && count === 96) {
    rightsprite.src = avasmile;
    texty.innerHTML = "“So, why have you come to visit me this late? And with that rain too...”";
  }
  else if (path === 1 && count === 97) {
    leftsprite.src = sajaneutral;
    texty.innerHTML = "“What’s up with all the toys and plushies?” Saja evades the question.";
  }
  else if (path === 1 && count === 98) {
    texty.innerHTML = "“I collect them. Anything that makes a noise. I just... have a soft spot for them.”<br><br>Saja remembers Ava burning a person to death just so he could deliver a message to the death god for her. That woman is decorating her home with plushies from children’s shows now? Her kind is known for their deceptiveness. Must be good at self-delusion too.";
  }
  else if (path === 1 && count === 99) {
    leftsprite.src = sajaannoyed;
    rightsprite.src = avaneutral;
    texty.innerHTML = "Saja picks up a plush wolf sitting next to her. She feels a plastic ball inside, which squeaks when she squeezes it.<br><br>“Isn’t that the cutest thing?” Ava says. “But please don’t do that. I’m... I can’t hear that right now.”";
  }
  else if (path === 1 && count === 100) {
    rightsprite.src = avasad;
    texty.innerHTML = "Saja feels the urge to rip this thing up. All of them. Just so Ava would drop this facade, show her true self again. That woman that laughed with glee when people got hurt. Who mocked her as her friend bled out in her arms. She wanted a reason to put a blade to her throat again...";
  }
  else if (path === 1 && count === 101) {
    leftsprite.src = sajasad;
    texty.innerHTML = "“Saja, why are you here?”<br><br>Saja made the choice to stay. So now she has to do what she came for. No point dancing around it. She pets the wolf in her hands, though its fur is rather cheap and scratchy.<br><br>“...I tried to fix it.” Saja forces out.<br><br>“Fix what?”<br><br>“Our mistake...”";
  }
  else if (path === 1 && count === 102) {
    rightsprite.src = avaneutral;
    texty.innerHTML = "“...Marvjad.” Saja clarifies.<br><br>“How?”<br><br>“I...” <br><br>Saja tries to sort her story into a coherent order, but just spills it as it comes to her mind.<br><br>“I met someone who could bring back the dead.”";
  }
  else if (path === 1 && count === 103) {
    leftsprite.src = sajadistress;
    texty.innerHTML = "“She did it to Lucy. Lucy wasn’t dead, but the one whose soul she inherited was. It was an unforeseen consequence. The soul was split between the two of them, two people in two bodies, but one.”<br><br>Saja didn’t check if Ava was following.<br><br>“But as confusing as it was, they… turned out fine. After almost a hundred years, Sumina was back. And then Sprialla and Wynnea. It worked, it was replicable! So I… “<br><br>Saja was forced to breathe in, the air flowing into her lungs with the grace of falling down the stairs.<br><br>“We buried her by the sea. I dug her up and we had to- to fix up the decay, but then- and she did it and— and...”";
  }
  else if (path === 1 && count === 104) {
    texty.innerHTML = "“You— We killed her five years ago... That kid, she... the memories of being killed. The people murdered and fed to her. She wasn’t prepared to... know all that. And Marvie experienced that trauma, anew and so much more intense. And I did that to her. To that child... She hates me now.”<br><br>Saja starts to cry, to sound like the toys around her.";
  }
  else if (path === 1 && count === 105) {
    texty.innerHTML = "“I got angry. I didn’t want to hurt anybody. I wanted my best friend back. She wasn’t supposed to be dead. I was fixing an error. I did the right thing. She’s alive but I don’t get her back. I don’t...”<br><br>Saja laughs or maybe suppressed a sob. It was hard to say.<br><br>“Eh- It’s not fair, is it? And then Jzytaja laughed. She laughed because she was happy that— Because her Brytesmyfz died on her home planet. And she was glad that I didn’t get something she couldn’t.”";
  }
  else if (path === 1 && count === 106) {
    leftsprite.src = sajasad;
    texty.innerHTML = "“And you come to me with that?” Ava asks, no comfort offered.<br><br>“I had no one else.”<br><br>“I figured. Saja... I’ve begun to hate you.”";
  }
  else if (path === 1 && count === 107) {
    leftsprite.src = sajatakenback;
    texty.innerHTML = "“What?” Saja’s eyes widen.<br><br>“Does it surprise you to hear me say that? How often have you told the same to me? And yet you always come back, because you know I vowed to always be your friend. But I’m breaking that promise.”<br><br>Saja doesn’t respond.<br><br>“After I killed Marvjad, I thought I owed it to you to offer my friendship. And I still had some of Marvjad’s feelings for you inside me. You two are the ones that showed me the beauty of friendship. That helped me free myself from Solerel’s idea of me. You hated me after all that, of course. I understood. I didn’t have the right to be upset. To refuse to give you another chance after everyone else has to give one to me.”";
  }
  else if (path === 1 && count === 108) {
    rightsprite.src = avaangry;
    texty.innerHTML = "Ava’s mouth bends the other way.<br><br>“And you hated me, you hurt me, you used me. You always came back to me, had me help you and then you told me you still hate me and you push me away. I kept doing it for Marvjad. Because I took her away from you, I had to replace her as best I could.”<br><br>Ava smiles and breathes out a laugh through her nose.<br><br>“But now, if Marvjad is angry at you. I think I’m allowed to be too. I get to be free of this curse. Of you.”";
  }
  else if (path === 1 && count === 109) {
    leftsprite.src = sajaangry;
    texty.innerHTML = "Saja catches herself and breathes out audibly through the nose.<br><br>“Oh boo hoo! You don’t get to have it easy! You murdered people!”<br><br>“So did you! But you come here to whine to me about having to face consequences for traumatizing a child! Have me act out your friend again while you treat me like air. You’re a spoiled fucking hypocrite, Saja.”<br><br>“I— That’s not—”<br><br>Saja can’t find the words that would make all this okay. There might not be any. Her fingers dig into the wolf and it squeaks out.";
  }
  else if (path === 1 && count === 110) {
    leftsprite.src = sajadistress;
    rightsprite.src = avaneutral;
    texty.innerHTML = "Failing to come up with a retort, Saja crumbles again.<br><br>Ava takes the wolf and gently rescues it from Saja’s grasp. She sits down next to her again, and this time, Saja doesn’t escape. Ava makes it squeak once more.";
  }
  else if (path === 1 && count === 111) {
    texty.innerHTML = "“It’s so... vulnerable. It can’t move, or fight. It can only make this small noise. And only when I’m there.”<br><br>Ava gives Saja a moment to process. It's important to her that she listens.<br><br>“It’s fully dependent on me. It needs my protection. All it can do is ask and hope I listen.”<br><br>Ava hugs the wolf tight.<br><br>“Like the few friends I made... Like anyone I meet. Fragile, fleeting... Do you understand? I don’t ever want to hurt another, now that I know what that means. I don’t ever want someone to get hurt again.”";
  }
  else if (path === 1 && count === 112) {
    texty.innerHTML = "“But I’m mortal now. My powers are mostly gone. I can’t see anymore. I try my best to be the strongest I can be. But it’ll never be enough. Strength alone isn’t enough. Do you understand?”<br><br>Saja makes no reaction, but it's clear she's listening.<br><br>“I had to make peace with that, as much as it rips my heart apart. I’ll never be strong enough to do that. That I will make mistakes and that sometimes I can do everything right and it won’t be enough. And you never did.”";
  }
  else if (path === 1 && count === 113) {
    texty.innerHTML = "“I shouldn’t have to! It’s not okay to hurt people-”<br><br>“So your solution is to deny and forget it if you do?”<br><br>“No! I know I hurt them.”<br><br>“But you were hurt yourself, you spoke out of anger. You were excused and that means you did nothing wrong and have nothing to atone for. They should get over it already.”<br><br>“No! I don’t think that way.”<br><br>“Because it would be wrong. And wrong things can’t be done by you.”<br><br>“I don’t think that way...”";
  }
  else if (path === 1 && count === 114) {
    leftsprite.src = "";
    rightsprite.src = "";
    spriteimg.src = wolfplush;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    next.innerHTML = "SQUEEZE";
    texty.innerHTML = "Ava sighs and puts the wolf back into Saja’s hands.“Squeeze it. As many times as you need to.”";
  }
  else if (path === 1 && count === 115) {
    squeak.play();
    texty.innerHTML = "Saja does. She doesn’t know what Ava is trying to accomplish, but she has no clue what to do anyway. Did she mean that? Is Saja going to lose this one-sided friendship, too?";
  }
  else if (path === 1 && count === 116) {
    squeak.play();
    texty.innerHTML = "That really was selfish of her. To demand Ava always be by her side while pushing her away each time she comes within reach. But without her, Marvjad would still be... would have never died. How could she forgive that?";
  }
  else if (path === 1 && count === 117) {
    squeak.play();
    texty.innerHTML = "Ava begins to cry, but tries to stay quiet, as to not distract Saja. These sounds, they're like cries for help. The ones she used to ignore. She grew up under Solerel. Told who the enemies were and how to feel about them.";
  }
  else if (path === 1 && count === 118) {
    squeak.play();
    texty.innerHTML = "Saja remembers how she was told that Ava needed to die for the good of the world. And yet here she sits, five years later, and everything is fine. Ava hid in Marvjad because she knew Saja would never kill her. And then she did anyway. Because she was told by her elders, by those she trusted, that she had to.";
  }
  else if (path === 1 && count === 119) {
    squeak.play();
    texty.innerHTML = "It sounds a bit like Jzytaja. That little laugh before she managed to suffocate it. She's glad to not be the only one to suffer. And Saja would have so gladly let her suffer alone. She only wanted herself to not get hurt.";
  }
  else if (path === 1 && count === 120) {
    squeak.play();
    texty.innerHTML = "No, that can’t be right. She wants to protect her friends too. Her family. When did she stop doing that? Right, after she lost Marvjad...";
  }
  else if (path === 1 && count === 121) {
    squeak.play();
    next.innerHTML = "Next";
    spriteimg.src = sajasad;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "Saja looks around the room. So many toys, too many to put protective curses on all of them. Each representing someone to protect. Someone Ava could not bear to see hurt. The wolf stares up at her, squeaking one last time, now with her attention. Saja realizes she isn’t holding a toy. She lifts it up to her chest and lets the cheap fur sting her cheek. She understands now, and the wolf stops squeaking.";
  }
  else if (path === 1 && count === 122) {
    leftsprite.src = sajasad;
    rightsprite.src = avasad;
    spriteimg.src = "";
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "“You... you are a step ahead of me.” Saja breaks the silence.<br><br>“As you were when we first met.”<br><br>“I’ve been unfair to you. But I see you now. I don’t hate who I’m seeing. I’m sorry, you’ve... I’m sorry.”<br><br>Ava hugs Saja carefully, ready to pull away if she resists, but Saja indulges her.";
  }
  else if (path === 1 && count === 123) {
    texty.innerHTML = "“Will you... I may need some help to really get it. I wanna spend some more time, to learn from you. Get to know you, as you are now.”<br><br>“You can start by staying the night. Are you tired? I’ve got lots of games we could play.”<br><br>Saja places her arms around Ava. A voice inside her still cautions that this kind Ava is just an act. It's just too drastic a change. But whether this Ava is fake or real, she wants to be more like her.";
  }
  else if (count === 55 && ab === 2) {
    path = 2;
    game.style.backgroundImage = "";
    gamebg.style.backgroundImage = afternormalbg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 2000);
    skip.style.display = "block";
    A.style.display = "none";
    B.style.display = "none";
    next.disabled = "";
    next.style.opacity = "100%";
    leftsprite.src = "";
    rightsprite.src = "";
    spriteimg.src = "";
    texty.innerHTML = "And with that choice, you suddenly find yourself whisked to another location.<br><br>You seem to be on a rooftop in the middle of an urban area. A handful of buildings tower above you, pillars of glistening light. Though you don’t meander close to the edge, you fully believe that if you looked down from there you would see just as many exposed rooftops below you, and people meandering the sidewalks like ants beneath that.<br><br>The air ebbs around you, moist and indifferent. It might rain soon.";
  }
  else if (path === 2 && count === 56) {
    spriteimg.src = presgaleneutral;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "The woman from the introductory room, Gale, is the only other person with you on this rooftop. She looks around a bit, getting up to the edge of the rooftop and looking down at the streets below, scanning left and right as she triangulates herself.<br><br>She mutters, in a way that makes you think she forgets you’re here and is just doing this for her own benefit, “Hm. This is Bay City.” A long pause. She goes to a different face of the building and looks down again. “Something’s off.”";
  }
  else if (path === 2 && count === 57) {
    spriteimg.src = presgalefrusupset;
    chime.play();
    A.style.display = "block";
    B.style.display = "block";
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.innerHTML = "So, uh, do you mind telling me what’s going on?";
    B.innerHTML = "Where are we? What do you think we need to do?";
    texty.innerHTML = "She starts to get visibly upset, and whips a mobile phone out of her pants pocket. This only seems to further her discomfort, as she swipes and taps furiously at the device and her expressions grow increasingly grotesque.<br><br>She eventually finds something that gives her a brief moment of respite, her expression returning to the level of agitation that it only had at the beginning of this kerfuffle.";
  }
  else if (path === 2 && count === 58) {
    spriteimg.src = presgaleneutral;
    A.style.display = "none";
    B.style.display = "none";
    next.disabled = "";
    next.style.opacity = "100%";
    texty.innerHTML = "She looks up, surprised at her train of thought being interrupted.<br><br>“Oh, right. I forgot you’re here.” She walks over, swiping a few new commands in on her phone. “I mean, just look at this. All my contacts, all my message history, gone.” She pauses. “…wait, you know what a phone is, right?”<br><br>You nod and she passes you the device. At first blush it seems to be an ordinary and undecorated smartphone, but after tapping through various homescreen icons you realize that it seems like it was right out of the factory: there are no saved images, no user installed apps, and most oddly of all: no date in the calendar. The clock on the homescreen blinks a passive 7:32pm, making no allusions to day of the week or year. ";
  }
  else if (path === 2 && count === 59) {
    texty.innerHTML = "“Look at this,” she ushers, swiping back to the homescreen and opening the messaging app.  There’s one conversation history listed, marked as read. You open it.<br><br>   Contact: Felix Opsero<br>   Due By: 21:40<br>   37.6540697, -122.3950089<br><br>And a second message after that:<br><br>   A.G thanks you for your business.";
  }
  else if (path === 2 && count === 60) {
    chime.play();
    A.style.display = "block";
    B.style.display = "block";
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.innerHTML = "Wait, what delivery?";
    B.innerHTML = "You’re wearing the same clothes as earlier and your phone is wiped. What are you delivering?";
    B.style.fontSize = "13pt";
    texty.innerHTML = "“A.G is Agritech.” She pauses, waiting for a look of recognition on your face. When it doesn’t come, she elaborates, “They’re a technology corporation that specializes in agriculture. You know, genetically engineered crops and all.”<br><br>You nod. That’s something recognizable to your 2020’s ear.<br><br>She takes the phone back from you, sliding it into her pocket. “Plants. Growth. It makes sense.” She nods to herself, glad that she’s cracked the prompt’s code. “I just gotta make this delivery and then we’re good. Prompt filled.”";
  }
  else if (path === 2 && count === 61) {
    spriteimg.src = presgaleconfused;
    chime.play();
    skip.style.display = "none";
    A.innerHTML = "Ok. And explain that to me like I’m five.";
    B.innerHTML = "Imagine you’re talking to a caveman. The only jobs I know are get food, make goods, and make love.";
    texty.innerHTML = "Gale blinks twice.<br><br>“I’m an infocourier.”";
  }
  else if (path === 2 && count === 62 && ab === 1) {
    spriteimg.src = presgaleneutral;
    A.style.display = "none";
    B.style.display = "none";
    next.disabled = "";
    next.style.opacity = "100%";
    skip.style.display = "block";
    B.style.fontSize = "18pt";
    texty.innerHTML = "She sighs, using her fingertips to rub her temples. <br><br>“OK. So inside every living being there’s this material called DNA. There are some very smart machines that can read what these building blocks say. For an ordinary person, it’s just directions on ‘how to be a human’, but an infocourier like me hides extra information here. <br><br>“It’s written in code, so only someone who knows it’s there can read it. What infocouriers do is accept jobs from people, encode their data somewhere in their body, and then take it to the drop-off point. Big companies and sketchy organizations pay us very lucrative money to do this.”<br><br>She pauses, staring up at a cloud. “Vastly oversimplified, there’s other kinds of payloads. And different encoding schemes. But that’s the jist of it.”";
    count += 1
  }
  else if (path === 2 && count === 62 && ab === 2) {
    A.style.display = "none";
    B.style.display = "none";
    next.disabled = "";
    next.style.opacity = "100%";
    skip.style.display = "block";
    B.style.fontSize = "18pt";
    texty.innerHTML = "She gives you a baffled look, her face developing a half-dozen new wrinkles as her mouth twists sharply. <br><br>“Unga bunga. Ooooock, oook?” She jumps around a bit and comically overexaggerates scratching her head.<br><br>“Too far back? Ok, fine.” She pauses for a second to collect her thoughts once more.";
  }
  else if (path === 2 && count === 63) {
    spriteimg.src = presgaleneutral;
    texty.innerHTML = "“So inside every living being there’s this material called DNA. There are some very smart machines that can read what these building blocks say. For an ordinary person, it’s just directions on ‘how to be a human’, but an infocourier like me hides extra information here. <br><br>“It’s written in code, so only someone who knows it’s there can read it. What infocouriers do is accept jobs from people, encode their data somewhere in their body, and then take it to the drop-off point. Big companies and sketchy organizations pay us very lucrative money to do this.”<br><br>She pauses, staring up at a cloud. “Vastly oversimplified, there’s other kinds of payloads. And different encoding schemes. But that’s the jist of it.”";
  }
  else if (path === 2 && count === 64) {
    texty.innerHTML = "You nod along. That’s probably as understandable of an explanation as you’re going to get.<br><br>“I’m guessing the data was already encoded here.” She holds up her left arm and points at her forearm. “That’s pretty standard practice.”<br><br>She looks at a building to the south, eyes staring through  it to the horizon beyond the building. “They gave us GPS coordinates. It’s gonna be a trek, but totally doable without a primo pass in about two hours. Time to get moving.”<br><br>Agreeing, you pick up the pace as you follow her down the stairs.";
  }
  else if (path === 2 && count === 65) {
    game.style.backgroundImage = afternormalbg;
    gamebg.style.backgroundImage = "";
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
      gamebg.style.backgroundImage = afterrbbg;
    }, 1000);
    spriteimg.src = presgalefrusupset;
    texty.innerHTML = "Gale grips the bannister to the rooftop tightly in her hands. She’s been peering over the edge for long enough you start to feel like you could mistake her for a gargoyle. <br><br>“Fuck. Fucking fuck.”<br><br>You’ve done enough rooftop-to-rooftop jumping for a lifetime, but thankfully you don’t need to get to the edge of this rooftop to know what she’s upset about. Five blocks ago she’d told you your destination was in five blocks, and you can see the red-blue lights from cop cars reflected up the faces of the buildings.<br><br>Given Gale’s reaction to law enforcement, it’s clear that her trade isn’t exactly above the table.<br><br>This delivery just got a little more complicated.";
  }
  else if (path === 2 && count === 66) {
    chime.play();
    A.style.display = "block";
    B.style.display = "block";
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.innerHTML = "What's up?";
    B.innerHTML = "What happened?";
    texty.innerHTML = "You’ve just barely caught your breath enough to be able to pipe up with a question when she snaps out of her stupor. She steps back from the edge, pulling out her phone again and rapidly typing in a bevy of commands.<br><br>Partway through this she starts getting visibly discouraged, shaking her head and groaning periodically. After a few minutes she looses a particularly loud “URRRRGGGGH” and looks up to the sky, blindly thrusting her phone in her pocket.";
  }
  else if (path === 2 && count === 67) {
    A.style.display = "none";
    B.style.display = "none";
    next.disabled = "";
    next.style.opacity = "100%";
    skip.style.display = "block";
    texty.innerHTML = "She tilts her head back down to make eye contact with you. “I can’t reach any of my contacts. Any of the numbers I have memorized are offline.” <br><br>She goes back to the edge of the roof, peering down at the street below. “It’s like my network got wiped off the face of the earth.”<br><br>Your legs start to buckle beneath you, exhaustion from the unexpected jolt of activity finally catching up with you. You sit down on the rooftop, resting your upper body weight on your arms.<br><br>You share the moment together, accompanied only by the wailing sirens below and the thick bay air. The last rays of the sunlight start to vanish behind the mountains on the horizon and the sky starts to turn orange, reflected on the water’s surface. Everything is still.";
  }
  else if (path === 2 && count === 68) {
    game.style.backgroundImage = afterrbbg;
    gamebg.style.backgroundImage = sunsetrbbg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);
    spriteimg.src = futuregaledark;
    spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "A voice you don’t quite recognize gives you a jolt. “A.G’s in trouble, huh?”<br><br>You whip your head around, doing your best to get a good view of this unexpected guest. The light makes them hard to see, all you can make out is a long-legged silhouette.<br><br>They continue to talk, not waiting for any kind of response from you or Gale. “Odd for actual narcs to show up. Regulators don’t mess with the plant business, not ever since A.G vs The Midwest Cultivation Association made it clear that these matters were a lot easier to manage through litigation.”";
  }
  else if (path === 2 && count === 69) {
    leftsprite.src = presgalefrusupset;
    rightsprite.src = futuregaleneuflip;
    leftsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      leftsprite.style.opacity = 1;
      leftsprite.classList.remove("elementToFadeIn");
    }, 1000);
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    spriteimg.src = "";
    texty.innerHTML = "The figure walks forward a bit, entering the shadow of a nearby building. You can actually see them for the first time. She was made near-entirely of steel, her jaw and hands and legs glistening in the reflected light. Their singular lock of hair flopped to one side of their face, resting on a steel-sharp cheekbone. The rest of their head was shaved.<br><br>“What business do you have here?” You turn to Gale, who has turned around and taken up a defensive posture. <br><br>“Same as you, if I had to guess.” The steel figure holds up a plastic cylinder, fitted perfectly to her hand and covered in barcodes. “A delivery.”<br><br>Gale squints. You get the sense that running into someone else on the same job is a rarity for her, but not something unprecedented. The story seems believable enough.";
  }
  else if (path === 2 && count === 70) {
    texty.innerHTML = "“I just need a little verification to make sure you are who you say you are.” Gale pulls her phone out of her pocket and points the camera lens towards this mysterious interloper.<br><br>The other woman shrugs. “Sure, no skin off my back.” A pause. “So to speak.” She walks towards Gale, offering the barcoded object in her extended hand.<br><br>Gale looks at her screen, looks at the woman, and looks at her screen again. She nods and pockets the device. She doesn’t seem completely satisfied, but given the time limit this woman seems like her best shot.";
  }
  else if (path === 2 && count === 71) {
    leftsprite.src = presgaleneutral;
    texty.innerHTML = "Gale nods her head to the flashing lights below. “Well, we’re SOL for option A. Did you get any kind of contingency directions?”<br><br>The steel woman shakes her head. “I swung by one of their admin offices in Sunset the other day, place was abandoned. Don’t know what’s going on right now, but something’s afoot.”<br><br>“Christ.” <br><br>“I have a few other leads, but...” She nods her head to the flashing lights.<br><br>They talk in hushed tones that you can’t make out.";
  }
  else if (path === 2 && count === 72) {
    rightsprite.src = futuregaleneu;
    texty.innerHTML = "After a few minutes of back and forth, the two seem to come to an agreement. <br><br>The steel woman looks back to you, and then takes a running jump off the edge of the building away from the police. Your brain processes this in slow motion, initially shocked at the evident suicidality and then subsequently shocked by just how much vertical height they generate. They land seamlessly on a roof about a half-dozen floors higher than yours and vanish from sight.";
  }
  else if (path === 2 && count === 73) {
    rightsprite.src = "";
    texty.innerHTML = "“Figures some tin-can like that would like to show off.” You turn to face Gale. She seems oddly indignant. “Well, we got a location to meet up at next. About 40 minutes left before the contract goes cold, so we need to hurry.”<br><br>Great. More hurrying.<br><br>Antithetical to her words, she doesn’t immediately make for the stairs. You scan her face, looking for clues. She seems lost in thought.";
  }
  else if (path === 2 && count === 74) {
    leftsprite.src = presgaleconfused;
    texty.innerHTML = "She catches that you’re about to ask her another question and decides to head it off.<br><br>“I think I might have figured out what’s so off about this to me.”<br><br>She pulls out her phone again, pulling up the calendar. “You know how the year on this is blank, right?”<br><br>You nod.<br><br>“And the cybernetics that woman has…” She trails off. When she speaks again, there’s a hint of contempt in her voice, “They’re very dated, to say the least. Usually people opt for far subtler bio-tech based ones. Plus baton-based deliveries…” she makes a show of clenching her fist around an imagined tube, as though you wouldn’t know what a baton is. <br><br>“The reason none of my contacts are there is because this is a half-century before my time.”";
  }
  else if (path === 2 && count === 75) {
    game.style.backgroundImage = sunsetrbbg;
    gamebg.style.backgroundImage = "";
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
      gamebg.style.backgroundImage = sunsetnormalbg;
    }, 1000);
    leftsprite.src = presgalefrusupset;
    rightsprite.src = futuregaleneuflip;
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "You close the door behind you as you say goodbye to another potential lead.<br><br>“I really thought they’d have some info on this…” the stranger apologizes.<br><br>Gale is grinding her teeth. “Five minutes left. We’re not gonna make it in time.”<br><br>The steel woman is keeping an even keel. “It’s probably best to just cut our losses.”<br><br>Forcefully, “That’s not an option for me.” <br><br>This doesn’t manage to evoke an emotional response. “We’re in a techy part of town right now. Certainly you can pick up a few Aspir Corporation contracts and make up for lost profits.”";
  }
  else if (path === 2 && count === 76) {
    texty.innerHTML = "“That’s not…” Gale pauses, face twisting in a way that reminds you of when she tried to explain her job to you. “I need to fill this job. Specifically. That’s not an option.”<br><br>Silence follows. Neither party knows how to meet the other’s demands, and for that matter, neither do you. <br><br>A look of revelation breaks on Gale’s face. “Tora’s been in the game forever, right? The Hoshi Family might have a lead.”";
  }
  else if (path === 2 && count === 77) {
    leftsprite.src = presgaleconfused;
    rightsprite.src = futuregaleexaspflip;
    texty.innerHTML = "For the first time, you see a strong emotion take over the stranger’s face. Her words are curt but intense. “No.” Mimicking Gale’s words, “That’s not an option.”<br><br>Gale is a bit taken aback by the fury of the response. “I mean, I get that working with the Family is a bit intimidating, but I’ve worked with her before. I’ll be fine.”<br><br>“I’ve worked with her before too.” She pauses, deciding on the words she materializes into sentences carefully. “If you go meet her now, you won’t leave that room while breathing. She’ll skin you alive to get that data, and then throw you in a woodchipper to see if they can find any residual data from old contracts.”";
  }
  else if (path === 2 && count === 78) {
    leftsprite.src = presgaleangry;
    texty.innerHTML = "This gets a rise out of Gale. Her brow is furrowed and her voice is raised. “Well, maybe that’d be the case for you, but I can handle myself. I’ll be fine.” She turns to leave in a huff, but a metal hand catches her by the arm.<br><br>The stranger enunciates their words clearly, throwing furor behind every pause between words. “You do not understand. This will kill you.” There is pleading in her eyes. <br><br>Gale tries to shake herself free of this grip. “Who the fuck do you think you are, anyways? Do you get off to bossing people around?”";
  }
  else if (path === 2 && count === 79) {
    rightsprite.src = futuregaleupsetflip;
    texty.innerHTML = "This metal woman’s face is a bit hard to read the emotions on, but that statement makes gloom overtake her features. “You still haven’t figured it out yet, huh?”<br><br>“Figured <i>what</i> out?” Gale spits.<br><br>They stare deeply into each other’s eyes, this stranger begging for empathy and Gale only giving rage.<br><br>The cyborg speaks, “We’re the same person. I’m you in the future. You’re me.”<br><br>Gale recoils in disgust, finally shaking her arm free from the other’s grasp. “Yeah fucking right. I’ll never become some steel sod.”<br><br>This remark seems to wound the metal woman, but she doesn’t say anything in response.";
  }
  else if (path === 2 && count === 80) {
    texty.innerHTML = "You look back and forth between the two of them. Gale from the future had rather extensive modifications for sure– she stood several inches taller, her frame tighter and tougher. <br><br>You focus closely on the only flesh that remains on the steel frame, the upper jaw and eyes. Their eye sockets are the same deep-set shape, and the bone underneath their brows seemed identical. The cyborg’s eyebrows were perceptibly thinner, and the YSO participant’s gaze significantly more tired and lifeless.";
  }
  else if (path === 2 && count === 81) {
    leftsprite.src = presgalefrusupset;
    rightsprite.src = futuregaleexaspflip;
    texty.innerHTML = "“What you think isn’t going to matter to her.” The cyborg sighs. “She’ll see you and think I ditched my augmentations. And she’ll do to you what she swore she’d do to me.”<br><br>Gale is still indignant. “How did I end up as some massive fuckup? No way is this the <b id='destiny'>destiny</b> that the voice was talking about.” She huffs. “Just because you fucked up your shot with her doesn’t mean that I will.”<br><br>Her future version looks like she’s holding back tears, an old wound reopened. “That’s not…” She looks away, focusing on some distant speck on the horizon. “That’s not how it happened.”";
  }
  else if (path === 2 && count === 82) {
    leftsprite.src = presgalefrusflip;
    rightsprite.src = futuregaleupset;
    texty.innerHTML = "“I don’t care.”<br><br>Gale stomps away, and you follow her.<br><br>You glance back to cyborg Gale before you round a corner. She’s holding her face in her hands.";
  }
  else if (path === 2 && count === 83) {
    game.style.backgroundImage = sunsetnormalbg;
    gamebg.style.backgroundImage = "";
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
      gamebg.style.backgroundImage = sunsetrbbg;
    }, 1000);
    leftsprite.src = "";
    rightsprite.src = "";
    spriteimg.src = presgaleneutral;
    texty.innerHTML = "You’re back where you were earlier, looking down at the Agritech building. Law enforcement activity has died down, but a few linger like awkward houseguests. Things seem to be at a bit of a standstill.<br><br>Gale is muttering to herself. “They’ve died down a bit. It’s probably doable...”<br><br>Your stomach churns. Even as a ‘neutral outside observer’, you don’t want to kick this hornet’s nest. Could you just appear where she is once inside?";
  }
  else if (path === 2 && count === 84) {
    chime.play();
    A.style.display = "block";
    B.style.display = "block";
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.innerHTML = "Are you sure this is a good idea?";
    B.innerHTML = "Do you know what you’re looking for?";
    texty.innerHTML = "“Alright. We’re going to approach from over there.” She points to the far side of the building, where the lined up cars seem thinnest. “We’ll have to work through most of the lab space to get to the drop-off point, but we might find an extractor somewhere along the way.”";
  }
  else if (path === 2 && count === 85) {
    A.style.display = "none";
    B.style.display = "none";
    next.disabled = "";
    next.style.opacity = "100%";
    texty.innerHTML = "She smirks. “Please. I’ve done jobs for these guys a few times before, I know my way around the campus. Now, c’mon.” Gale walks to the stairwell down from this roof and opens the door. “Let’s get this ‘growth’ thing handled.”<br><br>You inhale sharply. Seems like you’re doing this after all.";
  }
  else if (path === 2 && count === 86) {
    game.style.backgroundImage = "";
    gamebg.classList.add("elementToFadeInOut");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeInOut");
    }, 2000);
    texty.innerHTML = "Things go tits-up almost immediately. <br><br>Gale had checked around the corner a few times to ensure that there was no one around– only a few parked cars. She crouch-walks over to the nearest cover, and turns to wave you over when it happens.<br><br>You hear a loud whooshing and the sound of metal crunching. The arm that Gale had used to wave you over was gone, and the car in front of her perforated. Looking up, you see a human-sized black cylinder that had sprung forth from a grate on the concrete, smoke wafting from an extruded nozzle.<br><br>There was a reason why law enforcement was probing the building from the other side. Corporate security was still enabled here.";
  }
  else if (path === 2 && count === 87) {
    spriteimg.src = presgalefrusupset;
    texty.innerHTML = "Gale’s eyes go wide in shock as she stares at the stump where the hand once was.  She curls up into a ball, gritting her teeth and gripping her wrist. You notice that blood doesn’t drip from the wound– somehow the security device must have cauterized the wound as it was inflicted.<br><br>Curling in place would keep her safe from the security bot, but the noise had stirred the drowsy police presence. They seem to spill out of the walls, suddenly swarming and full of radio chatter.";
  }
  else if (path === 2 && count === 88) {
    leftsprite.src = presgalefrusupset;
    rightsprite.src = futuregaledarkflip;
    spriteimg.src = "";
    rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "A figure you can’t make out darts between the cars, a black shadow scurrying like a cat.<br><br>Two officers approach the spot where Gale is hiding, ducking and waddling to ensure they don’t set off security themselves. Before they can coordinate managing the corner, two bolts enter their shoulders with a meaty thwick and they collapse on the spot.<br><br>The figure pushes them aside and squats next to Gale, gently scooping her up and flitting back out of the scene of action.<br><br>You strain your eyesight, trying to figure out what this thing is and hoping it isn’t some other security measure when it abruptly and effortlessly picks you up and absconds from the scene.";
  }
  else if (path === 2 && count === 89) {
    game.style.backgroundImage = sunsetrbbg;
    gamebg.style.backgroundImage = "";
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
      gamebg.style.backgroundImage = sunsetnormalbg;
    }, 1000);
    leftsprite.src = presgaleconfused;
    rightsprite.src = futuregaleneuflip;
    texty.innerHTML = "They carry you from the scene. During this stretch you finally get a good view of them, realizing that this mysterious savior was none other than the stranger, cyborg Gale, from earlier. Time passes in silence.<br><br>Once you arrive safely on a rooftop a few blocks away, she places both of you down. She pulls a tube labeled ‘ablation gel’ from one of the many pockets on her jacket, applying it to the stump of the meaty Gale’s hand. She doesn’t object to this at all.<br><br>The gel foams on contact, and Gale grits her teeth and groans again. You’re reminded of the way hydrogen peroxide bubbles when placed on an open wound, but it looks at least five times as gnarly. <br><br>What catches you by surprise is that once the foam subsides, the bones and meat of Gale’s hand start to re-grow from the inside out. Bones sprout upwards, then meat and veins intermesh over them. It’s not even two minutes before the hand is back in working order, and she carefully flexes and extends the fingers.";
  }
  else if (path === 2 && count === 90) {
    texty.innerHTML = "There's still more time before anyone breaks the silence.<br><br>Gale, the one you met first, speaks first. “How did you know?” She pauses for a moment, and then adds, “And why. Why would you go out of the way to rescue me?”<br><br>Gale, the cybernetic one, does her best attempt at a soft smile with the one lip she has. “I knew this was the kinda thing you– well, I– would do.” She locks eyes with her past self. You get the sense that she wants to embrace her physically somehow, but holds back. “But I’ve learned that sometimes…” She settles on placing one metal hand reassuringly on the other woman’s fleshy shoulder. “The thing you need to do is to forgive yourself.”<br><br>They stare deeply into each other’s eyes, this elder begging for empathy and the younger gently giving way.";
  }
  else if (path === 2 && count === 91) {
    texty.innerHTML = "The tiredness of Gale’s eyes seems to lessen a little bit. “Yeah, I guess. I get what you mean.” Her words don’t sound fully convinced, but the begrudging tone from earlier seems fully absent from her voice.<br><br>She intermeshes the fingers of her recently re-grown hand with the metal hand on her shoulder. “Thanks.”<br><br>“Don’t worry about it.”";
    galehappy = 1;
    count = 123;
  }
  else if (count === 124) {
    game.style.backgroundImage = gamebg.style.backgroundImage;
    gamebg.style.backgroundImage = sevenbg;
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);
    texty.innerHTML = "1.5 After Round 1";
    count = 199; //NOTE: MOVE THIS LINE LATER!!!! DEAR GOD!!
  }
  else if (count === 200) { 
    texty.innerHTML = "The booming voice that you haven’t heard for a while breaks the lull in the conversation. <br><br>“Welcome back, dear competitors. I trust that you better understand how exactly these ‘prompts’ work now?”<br><br>Assorted nods and agreements.<br><br>“Very well. Let us move briskly to the next challenge. Your one-word prompt will be <i>‘Red’.”</i>";
  }
  else if (count === 201) {
    chime.play();
    A.style.display = "block";
    B.style.display = "block";
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.innerHTML = "Team A"; //NOTE: change these to character names?
    B.innerHTML = "Team B";
    skip.style.display = "none";
    texty.innerHTML = "“Reader, which do you choose?”";
  }
  else if (count === 202 && ab === 1) {
    path = 1;
    A.style.display = "none";
    B.style.display = "none";
    next.disabled = "";
    next.style.opacity = "100%";
    skip.style.display = "block";
    texty.innerHTML = "You already grasp the concept of this by now, so the Author does not bother leading you into this next story. The transition is quick and not quite as jarring the second time around.";
  }
  //after everything! do not mess with the count! <br><br>
  count += 1;
  debug.innerHTML = count;
  debug2.innerHTML = debugvar;
}

/*
else if (path === 1 && count === ) {
    texty.innerHTML = "";
  }

leftsprite.src = "";
rightsprite.src = "";
spriteimg.src = "";
  
spriteimg.classList.add("elementToFadeIn");
    setTimeout(function(){
      spriteimg.style.opacity = 1;
      spriteimg.classList.remove("elementToFadeIn");
    }, 1000);
    
leftsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      leftsprite.style.opacity = 1;
      leftsprite.classList.remove("elementToFadeIn");
    }, 1000);
rightsprite.classList.add("elementToFadeIn");
    setTimeout(function(){
      rightsprite.style.opacity = 1;
      rightsprite.classList.remove("elementToFadeIn");
    }, 1000);

game.style.backgroundImage = "";
    gamebg.style.backgroundImage = "";
    gamebg.classList.add("elementToFadeIn");
    setTimeout(function(){
      gamebg.classList.remove("elementToFadeIn");
    }, 1000);

    
chime.play();
    A.style.display = "block";
    B.style.display = "block";
    next.disabled = "disabled";
    next.style.opacity = "0%";
    A.innerHTML = "";
    B.innerHTML = "";
    skip.style.display = "none";

A.style.display = "none";
    B.style.display = "none";
    next.disabled = "";
    next.style.opacity = "100%";
    skip.style.display = "block";

WHITESPACE FOR TABS: "   "
*/

var ananeutral = "";
var anaperplexed = "";
var anasmile = "";
var ananeutral = "";

var avanervous = "";
var avacoatsmile = "";
var avacoatworried = "";
var avasmile = "";
var avaquestion = "";
var avaunsure = "";
var avaneutral = "";
var avasurprised = "";
var avahorror = "";
var avawonder = "";
var avasad = "";
var avaangry = "";

var cathysurprised = "";
var cathysmile = "";
var cathyneutral = "";

var deadlysoakedsad = "assets/sprite/deadlysoakedsad.png";

var futuregaledark = "";
var futuregaledarkflip = "";
var futuregaleneu = "";
var futuregaleneuflip = "";
var futuregaleexasp = "";
var futuregaleexaspflip = "";
var futuregaleupset = "";
var futuregaleupsetflip = "";

var phoenixannoyed = "";
var phoenixangry = "";
var phoenixback = "";
var phoenixneutral = "";
var phoenixidle = "";

var presgalefrusupset = "";
var presgalefrusflip = "";
var presgaleneutral = "";
var presgaleneutralflip = "";
var presgaleconfused = "";
var presgaleangry = "";

var sajaneualert = "";
var sajaneutral = "";
var sajaannoyed = "";
var sajasoakedsad = "";
var sajasoakedannoyed = "";
var sajasoakneufist = "";
var sajasoakedneu = "";
var sajasoakdark = "";
var sajadark = "";
var sajaresigned = "";
var sajasadsmile = "";
var sajasad = "";
var sajadistress = "";
var sajatakenback = "";
var sajaangry = "";

var toraneutral = "";
var toraneutralflip = "";
var toranod = "";
var toranodflip = "";
var torasmug = "";
var torasmugflip = "";
var toraboast = "";

var wolfplush = "assets/sprite/wolfplush.png";