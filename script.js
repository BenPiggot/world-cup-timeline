var video

$(function(){
  $('.item.box').on('click', function(){
  video = $(this).text()
  $("#hidden").slideDown('slow').css("opacity","1")
  for (var i in videos) {
    if (videos.hasOwnProperty(i)) {
      var objectKey = i;
      if (video === objectKey) {
        $('#player').attr('src',videos[i][0])
        $('#hidden-header').text(videos[i][1])
        $('.blurb').text(videos[i][2])
      }
    }
  }

  })
  $("#off").on('click', function() {
       $("#hidden").slideUp('slow');
       var url = $('#player').attr('src');
       $('#player').attr('src', '');
        $('.blurb').text('')
  });
});

$(function () {
  $('#show-graph').on('click', function() {
    $('#hidden-visualization').slideDown('slow')
    $('#show-graph').hide()
  })
  $("#off-vis").on('click', function() {
    $("#hidden-visualization").slideUp('slow');
    $('#show-graph').show()
  });
})

var videos = {
      "Chile '62": ["http://www.youtube.com/embed/sU2euuaLunw","Chile '62","The second of three World Cup championships for Brazil between 1958 and 1970, the eventual champions defeated the hosts (Chile) 4-2 in the semifinal. Pele was injured in the group stages, allowing Garrincha to play the starring role in his place. Arguably Pele's equal in talent, Garrincha's alcoholism and numerous injuries prevented him from achieving a similar status."],
      "England '66": ["http://www.youtube.com/embed/xzsOOLIsZ-U", "England '66", "Footage of Geoff Hurst's final goal in England's triumph over West Germany in the tournament final. Hurst scored both of England's goals in Extra-Time, the first of which many continue to believe never actually crossed the line."],
      "Mexico '70": ["http://www.youtube.com/embed/M5HbmeNKino", "Mexico '70", "Footage of what made Brazil so famous and popular as a footballing nation. Brazil's 1970 team was arguably the greatest international side to ever play. The goal in this video was the fourth in their 4-1 victory over Italy in the tournament final."],
      "West Germany '74": ["http://www.youtube.com/embed/0s2qIP7Uplc", "West Germany '74", "Hosts West Germany ultimately won the 1974 competition, but the tournament is perhaps best remembered as the high point of the great Dutch sides of 1970s. Scored by their most influential player, Johan Cruyff, the goal in the footage above is a brilliant example of that Dutch side's attacking prowess."],
      "Argentina '78": ["http://www.youtube.com/embed/2FkR_OwCCZo", "Argentina '78", "Hosts Argentina were a great side in 1978, scoring goals like Mario Kempes's (in the footage above) against Holland in the tournament final. However, their victory in that year's tournament continues to be marred by allegations that the country's then-military dictatorship unduly influenced the competiton, particularly in a suspicious 6-0 win over Peru."],
      "Spain '82": ["http://www.youtube.com/embed/T9c09P7dv28", "Spain '82", "Footage of Marco Tardelli's clinching goal for Italy against West Germany in the tournament final. Tardelli's celebration became iconic in subsequent years. Spain '82 is remembered as a great tournament, full of controversy, goals, and memorable games."],
      "Mexico '86": ["http://www.youtube.com/embed/1wVho3I0NtU", "Mexico '86","Video of arguably the greatest goal of all time, scored by Diego Maradona against England in the Quarterfinals. Scored just minutes after Maradona's notorious 'Hand of God' goal, where he punched the ball into the net and later declared 'the hand of God' had scored for Argentina. Mexico '86 was Maradona's tournament, as he led Argentina to the title."],
      "Italy '90": ["http://www.youtube.com/embed/ldss7IDQhQ0", "Italy '90","Video of Cameroon's winning goal against defending champion Argentina in the tournament's opening game. At the time, it was considered shocking for an African nation to defeat a world power like Argentina. Despite defeat to Cameroon, Argentina limped their way to the final where Germany defeated them."],
      "USA '94": ["http://www.youtube.com/embed/QSEyMudewOo","USA '94", "Many thought the US would be the first host nation to fail to qualify for the knockout rounds. This shock victory over highly-rated Columbia ensured that the US would advance. Tragically, Columbia's Andres Escobar would be assassinated for the own goal he scored in the game. The US would ultimately be eliminated by Brazil (the eventual torunament champions) in the Round of 16."],
      "France '98": ["http://www.youtube.com/embed/wDs5GMg69Yw", "France '98", "Video of Dennis Bergkamp's spectacular last-gasp winner against Argentina in the Quarterfinals, with unforgettable commentary from Jack Van Gelder. The tournament was ultimately won by the French hosts, led by talisman Zinedine Zidane."],
      "Korea/Japan '02": ["http://www.youtube.com/embed/gY6VegRn_SY", "Korea/Japan '02", "While the quality of football was not always high, Korea/Japan was a fascinating tournament. It was the first World Cup held outside either Europe and South America. Perhaps coincidentally, non-traditional football powers did surprisingly well. Hosts South Korea, Senegal, Turkey, and the USA all made the Quartertfinals for the first time. The above highlights are of the USA defeating Mexico in the Round of 16."],
      "Germany '06": ["http://www.youtube.com/embed/T56TnDnmARg", "Germany '06", "Footage of Zinedine Zidane's clinching goal for France against Spain in the tournament's Round of 16. Even more so than France '98, this was Zidane's tournament. In his last games before retirement, Zidane led the French to the final, where they lost to Italy in a penalty shoot-out. Famously, Zidane was sent off in the final for head-butting Marco Matterazzi."],
      "South Africa '10": ["http://www.youtube.com/embed/BEgMLHboT70", "South Africa '10", "Spain dominated international football between 2008 and 2012, winning the 2010 World Cup and the 2008 and 2012 European Championships.  Spain's dominance rested on the brilliance of FC Barcelona's Xavi Hernandex and Andres Iniesta, both of whom were central to the goal (scored by David Villa) in the footage above."],
      "Brazil '14": ["http://www.youtube.com/embed/Oo2_yFv1kmQ","Brazil '14", "Brazil were the hosts and many expected them to win. But eventual champions Germany took the hosts apart in a shocking 7-1 victory in the tournament semi-final. Germany were the better side, but the scale of victory shows just how important psychology is in sport, as Brazil did not seem to know how to respond to conceding an early goal."]
  }


