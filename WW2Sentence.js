

var points = 0;
var attempts = 0;
var timeLeft = 20;

var countdown = setInterval(countDownTimer,1000);

function countDownTimer(){
   console.log(sentenceArray[0][0]);
   var latin = sentenceArray[0][0];

   document.getElementById("flex1c").style.color = "red";
   document.getElementById("flex1c").innerHTML = timeleft;
   timeleft -= 1;
   if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("flex1c").innerHTML = "Finis!";
					document.getElementById("flex1c").style.color = "black";

          document.getElementById("flexA").disabled = true;
          document.getElementById("flexB").disabled = true;
          document.getElementById("flexC").disabled = true;
          document.getElementById("flexD").disabled = true;
          document.getElementById("flex1b").onclick = function(){startGame()};
          document.getElementById("flex1b").innerHTML = "Ludamus Iterum!";
          document.getElementById("flex1b").disabled = false;
          attempts++;
          document.getElementById("flex1a").innerHTML = points  + "/" + attempts;


    if (timeleft <= 0 && document.getElementById("flexA").innerHTML == sentenceArray[0][1]){
            document.getElementById("flexA").style.backgroundColor = "red";
            document.getElementById("flexA").innerHTML = latin.italics() + " means: " + sentenceArray[0][1];
          }

    if (timeleft <= 0 && document.getElementById("flexB").innerHTML == sentenceArray[0][1]){
            document.getElementById("flexB").style.backgroundColor = "red";
            document.getElementById("flexB").innerHTML = latin.italics() + " means: " + sentenceArray[0][1];
          }

    if (timeleft <= 0 && document.getElementById("flexC").innerHTML == sentenceArray[0][1]){
      document.getElementById("flexC").style.backgroundColor = "red";
      document.getElementById("flexC").innerHTML = latin.italics() + " means: " + sentenceArray[0][1];
      }

    if(timeleft <= 0 && document.getElementById("flexD").innerHTML == sentenceArray[0][1]){
            document.getElementById("flexD").style.backgroundColor = "red";
            document.getElementById("flexD").innerHTML = latin.italics() + " means: " + sentenceArray[0][1];
      }
  }
}


//This stops the timer and resets it to 15 seconds
function stopTimer() {

  clearInterval(countdown);
  document.getElementById("flex1c").innerHTML = "Timer";
  timeleft = 20;

}

stopTimer();



function myFunc(){
  document.getElementById("flexA").innerHTML = "Wrong!";
}

//INSERT NOUNS HERE AND VERBS ON LINE 474 and LINE 1550 reset(). CONSIDER MOVING VERBS HERE!
const nounList = [["patria", "patriae", "f", "fatherland", "countries"],["puella", "puellae", "f", "girl", "girls"],["poēta", "poētae", "m", "poet", "poets"],["nauta", "nautae", "m", "sailor", "sailors"]];
const nounList2 = [["fama", "famae", "f", "reputation", "rumors"],["forma", "formae", "f", "shape", "forms"],["fortuna", "fortunae", "f", "luck", "fortunes"],["īra", "īrae", "f", "anger", "angers"],["pecūnia", "pecūniae", "f", "money", "monies"],["philosophia", "philosophiae", "f", "philosophy", "philosophies"],["porta", "portae", "f", "gate", "gates"],["rosa", "rosae", "f", "rose", "roses"],["sententia", "sententiae", "f", "opinion", "opinions"],["vita", "vitae", "f", "life", "lives"]];

//[["bestia","bestiae","f","beast","beasts"],["latrina","latrinae","f","bathroom","bathrooms"],["ianua","ianuae","f","door","doors"],["dominus","domini", "m", "master", "masters"],["puer","pueri", "m", "boy", "boys"],["magister","magistri", "m", "teacher", "teachers"],["amicus","amici", "m", "friend", "friends"],["coquus","coqui", "m", "cook", "cooks"],["filius","filii", "m","son","sons"],["servus","servi","m","slave","slaves"],["uxor","uxoris","f","wife","wives"],["frater","fratris","m","brother","brothers"],["hospes","hospitis", "m","guest","guests"],["corpus","corporis", "n","body","bodies"],["vulnus","vulneris", "n","wound","wounds"],["manus","manus", "f","hand","hands"],["senatus","senatus", "m","senate","senates"],["dies","diei", "m","day","days"],["res","rei", "f","thing","things"]];

class Noun {
  constructor(nominative, genitive, gender, singMeaning, plMeaning){
    this.nominative = nominative;
    this.genitive = genitive;
    this.gender = gender;
    this.singMeaning = singMeaning;
    this.plMeaning = plMeaning;
  }

  //NOMINATIVE

  get nominativeSing(){
    return this.singNominative();
  }

  singNominative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.nominative;
        } else {
          return this.nominative;
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.nominative;
    }
  }

  get nominativeSingTrans(){
    return this.singNominativeTrans();
  }

  singNominativeTrans(){
    return "The " + this.singMeaning;
  }

    //GENITIVE

  get genitiveSing(){
      return this.singGenitive();
  }

  singGenitive(){
    if (this.genitive.slice(-2,) == "ae"){
        return this.genitive;
    } else if (this.genitive.slice(-2,) == "ei"){
        return this.genitive.slice(0,-2) + "ēī";
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "ī";
    } else if (this.genitive.slice(-2,) == "is"){
        return this.genitive;
    } else if (this.genitive.slice(-2,) == "us"){
        return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get genitiveSingTrans(){
      return this.singGenitiveTrans();
  }

  singGenitiveTrans(){
      return " of the " + this.singMeaning;
  }

    //DATIVE

  get dativeSing(){
      return this.singDative();
  }

  singDative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive;
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēī";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "ō";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ī";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūi";
    }
  }

  get dativeSingTrans(){
    return this.singDativeTrans();
  }

  singDativeTrans(){
    return " to the " + this.singMeaning;
  }

  //ACCUSATIVE

  get accusativeSing(){
    return this.singAccusative();
  }

  singAccusative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "am";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "em";
    } else if (this.gender == "n" && this.genitive.slice(-1,) == "i"){
      return this.nominative;
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "um";
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.nominative;
        } else {
          return this.genitive.slice(0,-2) + "em";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "um";
    }
  }

  get accusativeSingTrans(){
    return this.singAccusativeTrans();
  }

  singAccusativeTrans(){
      return " the " + this.singMeaning;
  }

  //ablative

  get ablativeSing(){
    return this.singAblative();
  }

  singAblative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ā";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ē";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "ō";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "e";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ū";
    }
  }

  get ablativeSingTrans(){
    return this.singAblativeTrans();
  }

  singAblativeTrans(){
    return " with the " + this.singMeaning;
  }

  //Vocative
  get vocativeSing(){
    let vocative = this.singVocative();
    return vocative[0].toUpperCase() + vocative.substring(1);
  }

  singVocative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.nominative;
      } else if (this.gender == "m"){
          if (this.nominative.slice(-3,) == "ius"){
            return this.genitive.slice(0,-1);
          } else if (this.nominative.slice(-2,) == "us"){
            return this.genitive.slice(0,-1) + "e";
          } else {
            return this.nominative;
          }
      }
    } else if (this.genitive.slice(-2,) == "is"){
        return this.nominative;
    } else if (this.genitive.slice(-2,) == "us"){
      return this.nominative;
    }
  }

  get vocativeSingTrans(){
    return this.singVocativeTrans();
  }

  singVocativeTrans(){
      let vocative = this.singMeaning;
      return vocative[0].toUpperCase() + vocative.substring(1);
    }


  //NOMINATIVE PLURAL

  get nominativePl(){
    return this.plNominative();
  }

  plNominative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ae";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a";
      } else {
        return this.genitive.slice(0,-1) + "ī";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.genitive.slice(0,-2) + "a";
        } else {
          return this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get nominativePlTrans(){
    return this.plNominativeTrans();
  }

  plNominativeTrans(){
    return "The " + this.plMeaning;
  }

    //GENITIVE

  get genitivePl(){
      return this.plGenitive();
  }

  plGenitive(){
    if (this.genitive.slice(-2,) == "ae"){
        return this.genitive.slice(0,-2) + "ārum";
    } else if (this.genitive.slice(-2,) == "ei"){
        return this.genitive.slice(0,-2) + "ērum";
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "ōrum";
    } else if (this.genitive.slice(-2,) == "is"){
        return this.genitive.slice(0,-2) + "um"
    } else if (this.genitive.slice(-2,) == "us"){
        return this.genitive.slice(0,-2) + "ōrum";
    }
  }

  get genitivePlTrans(){
      return this.plGenitiveTrans();
  }

  plGenitiveTrans(){
      return " of the " + this.plMeaning;
  }

    //DATIVE

  get dativePl(){
      return this.plDative();
  }

  plDative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "īs";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēbus";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "īs";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ibus";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ibus";
    }
  }

  get dativePlTrans(){
    return this.plDativeTrans();
  }

  plDativeTrans(){
    return " to the " + this.plMeaning;
  }

  //ACCUSATIVE

  get accusativePl(){
    return this.plAccusative();
  }

  plAccusative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ās";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a";
      } else {
        return this.genitive.slice(0,-1) + "ōs";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.genitive.slice(0,-2) + "a";
        } else {
          return this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get accusativePlTrans(){
    return this.plAccusativeTrans();
  }

  plAccusativeTrans(){
      return " the " + this.plMeaning;
  }

  //ablative

  get ablativePl(){
    return this.plAblative();
  }

  plAblative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "īs";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēbus";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "īs";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ibus";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ibus";
    }
  }

  get ablativePlTrans(){
    return this.plAblativeTrans();
  }

  plAblativeTrans(){
    return " with the " + this.plMeaning;
  }

  //Vocative Plural

  get vocativePl(){
    let vocative = this.plVocative();
    console.log(vocative);
    console.log(vocative[0].toUpperCase() + vocative.substring(1));

    return vocative[0].toUpperCase() + vocative.substring(1);

  }

  plVocative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ae";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a";
      } else {
        return this.genitive.slice(0,-1) + "ī";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.genitive.slice(0,-2) + "a";
        } else {
          return this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get vocativePlTrans(){
    return this.plVocativeTrans();
  }

  plVocativeTrans(){
    let vocative = this.plMeaning;
    return vocative[0].toUpperCase() + vocative.substring(1);
  }

}

//VerbTemplate

//infinitives in 2nd: ēre and 3r-io: êre
let verbList = [["amo", "amare", "amavi","amatus", "love", "loving", "loved", "loved"],["cogito", "cogitare", "cogitavi","cogitatus", "consider", "considering", "considered", "condsidered"],["erro", "errare", "erravi","erratus", "mistake", "mistaking", "mistook", "mistaken"],["laudo", "laudare", "laudavi","laudatus", "praise", "praising", "praised", "praised"],["observo", "observare", "observavi","observatus", "observe", "observing", "observed", "observed"],["debeo", "debēre", "debui","debitus", "owe", "owing", "owed", "ought"],["moneo", "monēre", "monui","monitus", "warn", "warning", "warned", "advised"],["terreo", "terrēre", "terrui","territus", "frighten", "frightening", "terrified", "frightened"],["servo", "servare", "servavi","servatus", "guard", "saving", "kept", "preserved"],["conservo", "conservare", "conservavi","conservatus", "preserve", "conserving", "maintained", "preserved"],["voco", "vocare", "vocavi","vocatus", "call", "summoning", "called", "summoned"],["video", "vidēre", "vīdi","visus", "see", "seeing", "saw", "seen"]];
/*
[["amo", "amare", "amavi","amatus", "love", "loving", "loved", "loved"],["cogito", "cogitare", "cogitavi","cogitatus", "think", "thinking", "thought", "thought"],["debeo", "debēre", "debui","debitus", "owe", "owed", "owed", "ought"],["moneo", "monēre", "monui","monitus", "warn", "warning", "warned", "advised"],["terreo", "terrēre", "terrui","territus", "frighten", "frightening", "terrified", "frightened"],["erro", "errare", "erravi","erratus", "mistake", "mistaking", "mistook", "mistaken"],["servo", "servare", "servavi","servatus", "guard", "saving", "kept", "preserved"],["conservo", "conservare", "conservavi","conservatus", "preserve", "conserving", "maintained", "preserved"],["voco", "vocare", "vocavi","vocatus", "call", "summoning", "called", "summoned"],["pulso", "pulsare", "pulsavi","pulsatus", "strike", "striking", "struck", "struck"],["do", "dare", "dēdi","datus", "give", "giving", "gave", "given"],
["video", "vidēre", "vīdi","visus", "see", "seeing", "saw", "seen"],["duco", "ducere", "duxi","ductus", "lead", "leading", "led", "led"],
["capio", "capere", "cēpi","captus", "capture", "capturing", "captured", "captured"],["audio", "audire", "audivi","auditus", "hear", "hearing", "heard", "heard"],["facio", "facere", "fēci","factus", "make", "making", "made", "made"]];
*/

//const verbList = [["capio", "capere", "cēpi","captus", "capture", "capturing", "captured", "captured"],["duco", "ducere", "duxi","ductus", "lead", "leading", "led", "led"],["facio", "facere", "fēci","factus", "make", "making", "made", "made"]];



class Verb {
  constructor(first, second, third, fourth, verb, verbing, verbed,ppVerb){
  this.first = first;
  this.second = second;
  this.third = third;
  this.fourth = fourth;
  this.verb = verb;
  this.verbing = verbing;
  this.verbed = verbed;
  this.ppVerb = ppVerb;
  }

  //PRESENT ACTIVE INFINITIVE

  get actInfPres(){
    return this.presActInf();
  }

  presActInf(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āre";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second;
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second;
    } else if (this.second.slice(-3,) == "ere"){
      return this.second;
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īre";
    }
  }

  get actInfPresTrans(){
    return this.presActInfTrans();
  }

  presActInfTrans(){
    return " to " +  this.verb;
  }

  //SINGULAR IMPERATIVE

  get imperativeSing(){
    return this.singImperative();
  }

  singImperative(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ā";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ē";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      if (this.second == "facere"){
        return "fac";
      } else {
      return this.second.slice(0,-3) + "e";
      }
    } else if (this.second.slice(-3,) == "ere"){
        if (this.second == "ducere"){
          return "duc";
        } else if (this.second == "dicere"){
          return "dic";
        } else {
          return this.second.slice(0,-3) + "e";
        }
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "ī";
    }
  }

  get imperativeSingTrans(){
    return this.verb;
  }

  singImperativeTrans(){
    return this.imperativeSingTrans();
  }

  //PLURAL IMPERATIVE

  get imperativePl(){
    return this.plImperative();
  }

  plImperative(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āte";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēte";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ite";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ite";
    } else if(this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īte";
    }
  }

  get imperativePlTrans(){
    return this.verb;
  }

  plImperativeTrans(){
    return this.imperativePlTrans();
  }




  //PRESENT TENSE
  get firstSingPres(){
    return this.presFirstSing();
  }

  presFirstSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ō";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "eō";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iō";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ō";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iō";
    }
  }



  get firstSingPresTrans(){
    return this.presFirstSingTrans();
  }

  presFirstSingTrans(){
    return "I " +  this.verb;
  }

  get secondSingPres(){
    return this.presSecondSing();
  }

  presSecondSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ās";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēs";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "is";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "is";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īs";
    }
  }

  get secondSingPresTrans(){
    return this.presSecondSingTrans();
  }

  presSecondSingTrans(){
    return "You " +  this.verb;
  }

  get thirdSingPres(){
    return this.presThirdSing();
  }

  presThirdSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "at";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "et";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "it";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "it";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "it";
    }
  }

  get thirdSingPresTrans(){
    return this.presThirdSingTrans();
  }

  presThirdSingTrans(){
    return "He " +  this.verb + "s";
  }

  get thirdSingPresTrans2(){
    return this.presThirdSingTrans2();
  }

  presThirdSingTrans2(){
    return this.verb + "s";
  }

  get firstPlPres(){
    return this.presFirstPl();
  }

  presFirstPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āmus";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēmus";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "imus";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "imus";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īmus";
    }
  }

  get firstPlPresTrans(){
    return this.presFirstPlTrans();
  }

  presFirstPlTrans(){
    return "We " +  this.verb;
  }

  get secondPlPres(){
    return this.presSecondPl();
  }

  presSecondPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ātis";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ētis";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "itis";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "itis";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "ītis";
    }
  }

  get secondPlPresTrans(){
    return this.presSecondPlTrans();
  }

  presSecondPlTrans(){
    return "Y'all " +  this.verb;
  }


  get thirdPlPres(){
    return this.presThirdPl();
  }

  presThirdPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ant";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ent";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iunt";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "unt";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īunt";
    }
  }

  get thirdPlPresTrans(){
    return this.presThirdPlTrans();
  }

  presThirdPlTrans(){
    return "They " +  this.verb;
  }

  get thirdPlPresTrans2(){
    return this.presThirdPlTrans2();
  }

  presThirdPlTrans2(){
    return this.verb;
  }

//imperfect

  get firstSingImp(){
   return this.impFirstSing();
 }

  impFirstSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābam";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbam";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbam";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbam";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbam";
    }
  }



  get firstSingImpTrans(){
    return this.impFirstSingTrans();
  }

  impFirstSingTrans(){
    return "I used to " +  this.verb;
  }

  get secondSingImp(){
    return this.impSecondSing();
  }

  impSecondSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābās";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbās";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbās";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbās";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbās";
    }
  }

  get secondSingImpTrans(){
    return this.impSecondSingTrans();
  }

  impSecondSingTrans(){
    return "You were " +  this.verbing;
  }

  get thirdSingImp(){
    return this.impThirdSing();
  }

  impThirdSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "abat";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbat";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbat";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbat";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbat";
    }
  }

  get thirdSingImpTrans(){
    return this.impThirdSingTrans();
  }

  impThirdSingTrans(){
    return "She kept " +  this.verbing;
  }

  get thirdSingImpTrans2(){
    return this.impThirdSingTrans2();
  }

  impThirdSingTrans2(){
    return "kept " +  this.verbing;
  }

  get firstPlImp(){
    return this.impFirstPl();
  }

  impFirstPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābāmus";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbāmus";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbāmus";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbāmus";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbāmus";
    }
  }

  get firstPlImpTrans(){
    return this.impFirstPlTrans();
  }

  impFirstPlTrans(){
    return "We used to " +  this.verb;
  }

  get secondPlImp(){
    return this.impSecondPl();
  }

  impSecondPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābātis";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbātis";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbātis";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbātis";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbātis";
    }
  }

  get secondPlImpTrans(){
    return this.impSecondPlTrans();
  }

  impSecondPlTrans(){
    return "Y'all were " +  this.verbing;
  }


  get thirdPlImp(){
    return this.impThirdPl();
  }

  impThirdPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "abant";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbant";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbant";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbant";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbant";
    }
  }

  get thirdPlImpTrans(){
    return this.impThirdPlTrans();
  }

  impThirdPlTrans(){
    return "They were " +  this.verbing;
  }

  get thirdPlImpTrans2(){
    return this.impThirdPlTrans2();
  }

  impThirdPlTrans2(){
    return "were " +  this.verbing;
  }

  //future tense

    get firstSingFut(){
     return this.futFirstSing();
   }

    futFirstSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābō";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbō";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iam";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "am";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iam";
      }
    }



    get firstSingFutTrans(){
      return this.futFirstSingTrans();
    }

    futFirstSingTrans(){
      return "I will " +  this.verb;
    }

    get secondSingFut(){
      return this.futSecondSing();
    }

    futSecondSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābis";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbis";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iēs";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ēs";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iēs";
      }
    }

    get secondSingFutTrans(){
      return this.futSecondSingTrans();
    }

    futSecondSingTrans(){
      return "You will " +  this.verb;
    }

    get thirdSingFut(){
      return this.futThirdSing();
    }

    futThirdSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābit";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbit";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iet";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "et";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iet";
      }
    }

    get thirdSingFutTrans(){
      return this.futThirdSingTrans();
    }

    futThirdSingTrans(){
      return "It will " +  this.verb;
    }

    get thirdSingFutTrans2(){
      return this.futThirdSingTrans2();
    }

    futThirdSingTrans2(){
      return "will " +  this.verb;
    }

    get firstPlFut(){
      return this.futFirstPl();
    }

    futFirstPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābimus";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbimus";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iēmus";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ēmus";

      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iēmus";
      }
    }

    get firstPlFutTrans(){
      return this.futFirstPlTrans();
    }

    futFirstPlTrans(){
      return "We will " +  this.verb;
    }

    get secondPlFut(){
      return this.futSecondPl();
    }

    futSecondPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābitis";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbitis";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iētis";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ētis";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iētis";
      }
    }

    get secondPlFutTrans(){
      return this.futSecondPlTrans();
    }

    futSecondPlTrans(){
      return "Y'all will " +  this.verb;
    }


    get thirdPlFut(){
      return this.futThirdPl();
    }

    futThirdPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābunt";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbunt";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ient";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ent";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "ient";
      }
    }

    get thirdPlFutTrans(){
      return this.futThirdPlTrans();
    }

    futThirdPlTrans(){
      return "They will " +  this.verb;
    }

    get thirdPlFutTrans2(){
      return this.futThirdPlTrans2();
    }

    futThirdPlTrans2(){
      return "will " +  this.verb;
    }

   //PERFECT tense

   get firstSingPer(){
    return this.perFirstSing();
  }

   perFirstSing(){
     return this.third.slice(0,-1) + "ī";
   }

   get firstSingPerTrans(){
     return this.perFirstSingTrans();
   }

   perFirstSingTrans(){
     return "I " +  this.verbed;
   }

   get secondSingPer(){
    return this.perSecondSing();
  }

   perSecondSing(){
     return this.third.slice(0,-1) + "istī";
   }

   get secondSingPerTrans(){
     return this.perSecondSingTrans();
   }

   perSecondSingTrans(){
     return "You " +  this.verbed;
   }

   get thirdSingPer(){
    return this.perThirdSing();
  }

   perThirdSing(){
     return this.third.slice(0,-1) + "it";
   }

   get thirdSingPerTrans(){
     return this.perThirdSingTrans();
   }

   perThirdSingTrans(){
     return "She " +  this.verbed;
   }

   get thirdSingPerTrans2(){
     return this.perThirdSingTrans2();
   }

   perThirdSingTrans2(){
     return this.verbed;
   }

   get firstPlPer(){
    return this.perFirstPl();
  }

   perFirstPl(){
     return this.third.slice(0,-1) + "imus";
   }

   get firstPlPerTrans(){
     return this.perFirstPlTrans();
   }

   perFirstPlTrans(){
     return "We " +  this.verbed;
   }

   get secondPlPer(){
    return this.perSecondPl();
  }

   perSecondPl(){
     return this.third.slice(0,-1) + "istis";
   }

   get secondPlPerTrans(){
     return this.perSecondPlTrans();
   }

   perSecondPlTrans(){
     return "Y'all " +  this.verbed;
   }

   get thirdPlPer(){
    return this.perThirdPl();
  }

   perThirdPl(){
     return this.third.slice(0,-1) + "ērunt";
   }

   get thirdPlPerTrans(){
     return this.perThirdPlTrans();
   }

   perThirdPlTrans(){
     return "They " +  this.verbed;
   }

   get thirdPlPerTrans2(){
     return this.perThirdPlTrans2();
   }

   perThirdPlTrans2(){
     return this.verbed;
   }

   //PLUPERFECT getElementsByName

   get firstSingPlu(){
    return this.pluFirstSing();
  }

   pluFirstSing(){
     return this.third.slice(0,-1) + "eram";
   }

   get firstSingPluTrans(){
     return this.pluFirstSingTrans();
   }

   pluFirstSingTrans(){
     return "I had " +  this.ppVerb;
   }

   get secondSingPlu(){
    return this.pluSecondSing();
  }

   pluSecondSing(){
     return this.third.slice(0,-1) + "eras";
   }

   get secondSingPluTrans(){
     return this.pluSecondSingTrans();
   }

   pluSecondSingTrans(){
     return "You had " +  this.ppVerb;
   }

   get thirdSingPlu(){
    return this.pluThirdSing();
  }

   pluThirdSing(){
     return this.third.slice(0,-1) + "erat";
   }

   get thirdSingPluTrans(){
     return this.pluThirdSingTrans();
   }

   pluThirdSingTrans(){
     return "She had " +  this.ppVerb;
   }

   get thirdSingPluTrans2(){
     return this.pluThirdSingTrans2();
   }

   pluThirdSingTrans2(){
     return "had " +  this.ppVerb;
   }

   get firstPlPlu(){
    return this.pluFirstPl();
  }

   pluFirstPl(){
     return this.third.slice(0,-1) + "eramus";
   }

   get firstPlPluTrans(){
     return this.pluFirstPlTrans();
   }

   pluFirstPlTrans(){
     return "We had " +  this.ppVerb;
   }

   get secondPlPlu(){
    return this.pluSecondPl();
  }

   pluSecondPl(){
     return this.third.slice(0,-1) + "eratis";
   }

   get secondPlPluTrans(){
     return this.pluSecondPlTrans();
   }

   pluSecondPlTrans(){
     return "Y'all had " +  this.ppVerb;
   }

   get thirdPlPlu(){
    return this.pluThirdPl();
  }

   pluThirdPl(){
     return this.third.slice(0,-1) + "erant";
   }

   get thirdPlPluTrans(){
     return this.pluThirdPlTrans();
   }

   pluThirdPlTrans(){
     return "They had " +  this.ppVerb;
   }

   get thirdPlPluTrans2(){
     return this.pluThirdPlTrans2();
   }

   pluThirdPlTrans2(){
     return "had " +  this.ppVerb;
   }

   //FUTURE PERFECT

   get firstSingFutPer(){
    return this.futPerFirstSing();
  }

   futPerFirstSing(){
     return this.third.slice(0,-1) + "ero";
   }

   get firstSingFutPerTrans(){
     return this.futPerFirstSingTrans();
   }

   futPerFirstSingTrans(){
     return "I will have " +  this.verbed;
   }

   get secondSingFutPer(){
    return this.futPerSecondSing();
  }

   futPerSecondSing(){
     return this.third.slice(0,-1) + "eris";
   }

   get secondSingFutPerTrans(){
     return this.futPerSecondSingTrans();
   }

   futPerSecondSingTrans(){
     return "You will have " +  this.ppVerb;
   }

   get thirdSingFutPer(){
    return this.futPerThirdSing();
  }

   futPerThirdSing(){
     return this.third.slice(0,-1) + "erit";
   }

   get thirdSingFutPerTrans(){
     return this.futPerThirdSingTrans();
   }

   futPerThirdSingTrans(){
     return "It will have " +  this.ppVerb;
   }

   get thirdSingFutPerTrans2(){
     return this.futPerThirdSingTrans2();
   }

   futPerThirdSingTrans2(){
     return "will have " +  this.ppVerb;
   }

   get firstPlFutPer(){
    return this.futPerFirstPl();
  }

   futPerFirstPl(){
     return this.third.slice(0,-1) + "erimus";
   }

   get firstPlFutPerTrans(){
     return this.futPerFirstPlTrans();
   }

   futPerFirstPlTrans(){
     return "We will have " +  this.ppVerb;
   }

   get secondPlFutPer(){
    return this.futPerSecondPl();
  }

   futPerSecondPl(){
     return this.third.slice(0,-1) + "eritis";
   }

   get secondPlFutPerTrans(){
     return this.futPerSecondPlTrans();
   }

   futPerSecondPlTrans(){
     return "Y'all will have " +  this.ppVerb;
   }

   get thirdPlFutPer(){
    return this.futPerThirdPl();
  }

   futPerThirdPl(){
     return this.third.slice(0,-1) + "erint";
   }

   get thirdPlFutPerTrans(){
     return this.futPerThirdPlTrans();
   }

   futPerThirdPlTrans(){
     return "They will have " +  this.ppVerb;
   }

   get thirdPlFutPerTrans2(){
     return this.futPerThirdPlTrans2();
   }

   futPerThirdPlTrans2(){
     return "will have " +  this.ppVerb;
   }



}







// Generic function to return a shuffled array:
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }

    return array;
  }

//Noun Template

//this randomizes the nounList data
var rni = Math.floor(Math.random() * nounList.length);
var myNoun = new Noun(nounList[rni][0],nounList[rni][1],nounList[rni][2],nounList[rni][3],nounList[rni][4]);

var rn2i = Math.floor(Math.random() * nounList2.length);
var myNoun2 = new Noun(nounList2[rn2i][0],nounList2[rn2i][1],nounList2[rn2i][2],nounList2[rn2i][3],nounList2[rn2i][4]);



//This randomizes the order of the buttons
var flex = ["flexA","flexB","flexC","flexD"];
var flexIndx = Math.floor(Math.random() * flex.length);

shuffle(flex);

function reset(){

//Noun Reset
  rni = Math.floor(Math.random() * nounList.length);
  myNoun = new Noun(nounList[rni][0],nounList[rni][1],nounList[rni][2],nounList[rni][3],nounList[rni][4]);

  rn2i = Math.floor(Math.random() * nounList2.length);
  myNoun2 = new Noun(nounList2[rn2i][0],nounList2[rn2i][1],nounList2[rn2i][2],nounList2[rn2i][3],nounList2[rn2i][4]);




  //verb reset

  rvi = Math.floor(Math.random() * verbList.length);
  myVerb = new Verb(verbList[rvi][0],verbList[rvi][1], verbList[rvi][2], verbList[rvi][3], verbList[rvi][4],verbList[rvi][5],verbList[rvi][6],verbList[rvi][7]);
  console.log(verbList.length)

  rv2i = Math.floor(Math.random() * verbList.length);
  myVerb2 = new Verb(verbList[rv2i][0],verbList[rv2i][1], verbList[rv2i][2], verbList[rv2i][3], verbList[rv2i][4],verbList[rv2i][5],verbList[rv2i][6],verbList[rv2i][7]);


//THE ALGORITHM BELOW ENSURES THAT ALL VERBS ARE USED BEFORE ANOTHER IS REPEATED
  //this creates a Set to contain the verb deleted from the verbList array
  x = new Set();
  //this deletes the randomized verb
  y = verbList.splice(rvi,1);
  console.log(verbList.length);
  //the has() method determines whether a verb has been called already
  if (x.has(y)){
    reset();
  }
  //this adds the chosen verb to the Set
  x.add(y);
  console.log(y);
  //this resets the verbList when all of them have been deleted
  if (verbList.length ==0){
    verbList = [["amo", "amare", "amavi","amatus", "love", "loving", "loved", "loved"],["cogito", "cogitare", "cogitavi","cogitatus", "consider", "considering", "considered", "condsidered"],["erro", "errare", "erravi","erratus", "mistake", "mistaking", "mistook", "mistaken"],["laudo", "laudare", "laudavi","laudatus", "praise", "praising", "praised", "praised"],["observo", "observare", "observavi","observatus", "observe", "observing", "observed", "observed"],["debeo", "debēre", "debui","debitus", "owe", "owing", "owed", "ought"],["moneo", "monēre", "monui","monitus", "warn", "warning", "warned", "advised"],["terreo", "terrēre", "terrui","territus", "frighten", "frightening", "terrified", "frightened"],["servo", "servare", "servavi","servatus", "guard", "saving", "kept", "preserved"],["conservo", "conservare", "conservavi","conservatus", "preserve", "conserving", "maintained", "preserved"],["voco", "vocare", "vocavi","vocatus", "call", "summoning", "called", "summoned"],["video", "vidēre", "vīdi","visus", "see", "seeing", "saw", "seen"]];
}




console.log(myNoun.vocativePl);


  sentenceArray = [[myNoun2.accusativeSing + " " + myNoun.genitiveSing + " " + myVerb.secondSingPres,myVerb.secondSingPresTrans + " " + myNoun2.accusativeSingTrans + " " + myNoun.genitiveSingTrans],[myNoun2.accusativeSing + " " + myNoun.genitiveSing + " " + myVerb.secondPlPres,myVerb.secondPlPresTrans + " " +  myNoun2.accusativeSingTrans + " " + myNoun.genitiveSingTrans],[myNoun2.nominativeSing + " et " + myNoun.nominativeSing + " " + myVerb.thirdPlPres,myNoun2.nominativeSingTrans + " and " + myNoun.accusativeSingTrans + " " + myVerb.thirdPlPresTrans2],[myNoun.accusativeSing + " " + myNoun2.ablativeSing + " " +  " terret","He frightens " + " " +  myNoun.accusativeSingTrans + " " + myNoun2.ablativeSingTrans],[myNoun.dativeSing + " " + myNoun2.accusativeSing + " das","You give " + " " +  myNoun2.accusativeSingTrans + " " + myNoun.dativeSingTrans],[myNoun.accusativeSing + " " + myVerb.thirdPlPres + " " + myNoun2.nominativePl,myNoun2.nominativePlTrans + " " + myVerb.thirdPlPresTrans2 + " " + myNoun.accusativeSingTrans],[myNoun.vocativePl + ", " + myVerb.imperativePl + " " + myNoun2.accusativePl + "!", myNoun.vocativePlTrans + ", " + myVerb.imperativePlTrans + " " + myNoun2.accusativePlTrans + "!"],[myNoun.vocativeSing + ", " + myVerb.imperativeSing + " " + myNoun2.accusativeSing + "!", myNoun.vocativeSingTrans + ", " + myVerb.imperativeSingTrans + " " + myNoun2.accusativeSingTrans + "!"],[myNoun.nominativePl + " " + myNoun2.accusativePl + " " + myVerb.thirdPlPres,myNoun.nominativePlTrans + " " + myVerb.thirdPlPresTrans2  + " " + myNoun2.accusativePlTrans],[myNoun.nominativeSing + " " + myNoun2.accusativePl + " " + myVerb.thirdSingPres,myNoun.nominativeSingTrans + " " + myVerb.thirdSingPresTrans2 + " " + myNoun2.accusativePlTrans],[myNoun.nominativeSing + " " + myNoun2.accusativePl + " " + myVerb.thirdSingPres,myNoun.nominativeSingTrans + " " + myVerb.thirdSingPresTrans2 + " " + myNoun2.accusativePlTrans],[myNoun2.nominativeSing + " " + myNoun.accusativeSing + " " + myVerb.thirdSingPres,myNoun2.nominativeSingTrans + " " + myVerb.thirdSingPresTrans2 + " " + myNoun.accusativeSingTrans],[myNoun2.vocativeSing + ", " + myNoun.accusativeSing + " " + myVerb.firstPlPres + "!", myNoun2.vocativeSingTrans + ", we " + myVerb.thirdPlPresTrans2 + " " + myNoun.accusativeSingTrans +"!"]];

  shuffle(sentenceArray)

//randomizes order of flex boxes
  flex = ["flexA","flexB","flexC","flexD"];
  flexIndx = Math.floor(Math.random() * flex.length);
  shuffle(flex);

  stopTimer();
  timer = 20;
  document.getElementById("flex1c").innerHTML =  "Timer"
}

function startGame(){

  reset();

  countDownTimer();
  countdown = setInterval(countDownTimer,1000);

  document.getElementById("flex1b").disabled = true;

  document.getElementById("flexA").style.display = "block";
  document.getElementById("flexB").style.display = "block";
  document.getElementById("flexC").style.display = "block";
  document.getElementById("flexD").style.display = "block";

  document.getElementById("flexA").disabled = false;
  document.getElementById("flexB").disabled = false;
  document.getElementById("flexC").disabled = false;
  document.getElementById("flexD").disabled = false;

  document.getElementById("flexA").style.backgroundColor = "#008CBA";
  document.getElementById("flexB").style.backgroundColor = "#008CBA";
  document.getElementById("flexC").style.backgroundColor = "#008CBA";
  document.getElementById("flexD").style.backgroundColor = "#008CBA";

  document.getElementById("flex1b").innerHTML = sentenceArray[0][0];
  document.getElementById(flex[0]).innerHTML = sentenceArray[0][1];
  document.getElementById(flex[1]).innerHTML = sentenceArray[1][1];
  document.getElementById(flex[2]).innerHTML = sentenceArray[2][1];
  document.getElementById(flex[3]).innerHTML = sentenceArray[3][1];

}

function answerFlexA(){

  if (document.getElementById("flexA").innerHTML == sentenceArray[0][1]){

    var latin = sentenceArray[0][0];
    document.getElementById("flexA").innerHTML = "Bene!!! " + latin.italics() + " means: " + sentenceArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "green";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexA").style.backgroundColor = "red"
  document.getElementById("flexA").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;

  }
}

function answerFlexB(){

  if (document.getElementById("flexB").innerHTML == sentenceArray[0][1]){


    var latin = sentenceArray[0][0];
    document.getElementById("flexB").innerHTML = "Optime!!! " + latin.italics() + " means: " + sentenceArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "green";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexB").style.backgroundColor = "red"
  document.getElementById("flexB").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

function answerFlexC(){

  if (document.getElementById("flexC").innerHTML == sentenceArray[0][1]){

    var latin = sentenceArray[0][0];
    document.getElementById("flexC").innerHTML = "Bene!!! " + latin.italics() + " means: " + sentenceArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "green";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexC").style.backgroundColor = "red"
  document.getElementById("flexC").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

function answerFlexD(){

  if (document.getElementById("flexD").innerHTML == sentenceArray[0][1]){

    var latin = sentenceArray[0][0];
    document.getElementById("flexD").innerHTML = "Optime!!! " + latin.italics() + " means: " + sentenceArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "green";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();
  } else {

  document.getElementById("flexD").style.backgroundColor = "red"
  document.getElementById("flexD").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}
