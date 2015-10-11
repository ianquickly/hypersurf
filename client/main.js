Template.main.helpers({
    link: function() {
        var wave = Waves.findOne({});
        return wave ? wave.link:null;
    }
});

var surfTab = null;

Template.main.events({
  'click .surf': function(e) {
    e.preventDefault();
    var link = $(".url").val();
    
    var wave = Waves.findOne({});
    
    if(!surfTab)
      surfTab = window.open(link, link);
    else
      surfTab.location.href = link;
    
    Waves.update(wave._id, {$set:{
      link: link
    }});
  }
})


Tracker.autorun(function(){
  var wave = Waves.findOne({});

  if(!wave) return;
  var link = wave.link;
  if(!surfTab)
    surfTab = window.open(link, link);
  else
    surfTab.location.href = link;
})