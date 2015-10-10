Template.main.helpers({
    link: function() {
        var wave = Waves.findOne({});
        return wave ? wave.link:null;
    }
});