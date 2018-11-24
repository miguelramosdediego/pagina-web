// Dependencies:
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/html5media/1.1.8/html5media.min.js
// https://cdnjs.cloudflare.com/ajax/libs/plyr/3.3.21/plyr.min.js

// Mythium Archive: https://archive.org/details/mythium/


jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            mediaPath = 'https://archive.org/download/mythium/',
            extension = '',
            tracks = [{
            "track": 1,
            "name": "Gift Horse",
            "length": "03:53",
            "file": "Les_Hayden_-_Proverbs/Les_Hayden_-_01_-_Gift_Horse"
        }, {
            "track": 2,
            "name": "Proverb",
            "length": "03:53",
            "file": "Les_Hayden_-_Proverbs/Les_Hayden_-_02_-_Proverb"
        }, {
            "track": 3,
            "name": "Still",
            "length": "05:17",
            "file": "Les_Hayden_-_Proverbs/Les_Hayden_-_03_-_Still"
        }, {
            "track": 4,
            "name": "Fish to Swim",
            "length": "04:36",
            "file": "Les_Hayden_-_Proverbs/Les_Hayden_-_04_-_Fish_to_Swim"
        }, {
            "track": 5,
            "name": "Ophelia",
            "length": "05:06",
            "file": "Les_Hayden_-_Proverbs/Les_Hayden_-_05_-_Ophelia"
        }, {
            "track": 6,
            "name": "Elephant Wings",
            "length": "03:15",
            "file": "Les_Hayden_-_Proverbs/Les_Hayden_-_06_-_Elephat_Wings"
        }, {
            "track": 7,
            "name": "Oh What A Funny Joke",
            "length": "04:49",
            "file": "Les_Hayden_-_Proverbs/Les_Hayden_-_07_-_Oh_What_A_Funny_Joke"
        }, {
            "track": 8,
            "name": "Need",
            "length": "03:38",
            "file": "Les_Hayden_-_Proverbs/Les_Hayden_-_08_-_Need"
        }, {
            "track": 9,
            "name": "Three",
            "length": "04:19",
            "file": "Les_Hayden_-_Proverbs/Les_Hayden_-_09_-_Three"
        }, {
            "track": 10,
            "name": "Want",
            "length": "05:06",
            "file": "Les_Hayden_-_Proverbs/Les_Hayden_-_10_-_Want"
            }],
            buildPlaylist = $(tracks).each(function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // boo hoo
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
