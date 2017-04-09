(function() {

    /**
     * Obtains parameters from the hash of the URL
     * @return Object
     */
    function getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
    // username and image compile
    var userProfileSource = document.getElementById('user-profile-template').innerHTML,
        userProfileTemplate = Handlebars.compile(userProfileSource),
        userProfilePlaceholder = document.getElementById('user-profile');
    // data for last year
    var artistsSource = document.getElementById('artists-template').innerHTML,
        artistsTemplate = Handlebars.compile(artistsSource),
        artistsPlaceholder = document.getElementById('artists');
    var genresSource = document.getElementById('genres-template').innerHTML,
        genresTemplate = Handlebars.compile(genresSource),
        genresPlaceholder = document.getElementById('genres');
    var artworkSource = document.getElementById('artwork-template').innerHTML,
        artworkTemplate = Handlebars.compile(artworkSource),
        artworkPlaceholder = document.getElementById('artwork');
    //data for last month
    var monthartistsSource = document.getElementById('monthartists-template').innerHTML,
        monthartistsTemplate = Handlebars.compile(monthartistsSource),
        monthartistsPlaceholder = document.getElementById('monthartists');
    var monthgenresSource = document.getElementById('monthgenres-template').innerHTML,
        monthgenresTemplate = Handlebars.compile(monthgenresSource),
        monthgenresPlaceholder = document.getElementById('monthgenres');
    var monthartworkSource = document.getElementById('monthartwork-template').innerHTML,
        monthartworkTemplate = Handlebars.compile(monthartworkSource),
        monthartworkPlaceholder = document.getElementById('monthartwork');
    //data for all time
    var alltimeartistsSource = document.getElementById('alltimeartists-template').innerHTML,
        alltimeartistsTemplate = Handlebars.compile(alltimeartistsSource),
        alltimeartistsPlaceholder = document.getElementById('alltimeartists');
    var alltimegenresSource = document.getElementById('alltimegenres-template').innerHTML,
        alltimegenresTemplate = Handlebars.compile(alltimegenresSource),
        alltimegenresPlaceholder = document.getElementById('alltimegenres');
    var alltimeartworkSource = document.getElementById('alltimeartwork-template').innerHTML,
        alltimeartworkTemplate = Handlebars.compile(alltimeartworkSource),
        alltimeartworkPlaceholder = document.getElementById('alltimeartwork');

    var params = getHashParams();

    var access_token = params.access_token,
        refresh_token = params.refresh_token,
        error = params.error;

    if (error) {
        alert('There was an error during the authentication');
    } else {
        if (access_token) {
            // count function for later. Counts multiple occurances in an array
            var count = function(ary, classifier) {
                return ary.reduce(function(counter, item) {
                    var p = (classifier || String)(item);
                    counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
                    return counter;
                }, {})
            }
            // fetch the user info eg username and image
            $.ajax({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                    userProfilePlaceholder.innerHTML = userProfileTemplate(response);
                    $('#login').hide();
                    $('#loggedin').show();
                }
            });
            // Fetch last year
            $.ajax({
                url: 'https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50&offset=0',
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                    var data = [];
                    for (i = 0; i < response.items.length; i++) {
                        for (j = 0; j < response.items[i].genres.length; j++) {
                            data.push(response.items[i].genres[j])
                        }
                    }
                    var result = Object.keys(count(data)).sort(function(a, b) {
                        return count(data)[b] - count(data)[a];
                    })
                    artistsPlaceholder.innerHTML = artistsTemplate(response)
                    genresPlaceholder.innerHTML = genresTemplate(result.slice(0, 100)) //this 100 is the number of genres shown
                    artworkPlaceholder.innerHTML = artworkTemplate(response)
                }
            });
            // Fetch last month
            $.ajax({
                url: 'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50&offset=0',
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                    var data = [];
                    for (i = 0; i < response.items.length; i++) {
                        for (j = 0; j < response.items[i].genres.length; j++) {
                            data.push(response.items[i].genres[j])
                        }
                    };
                    var result = Object.keys(count(data)).sort(function(a, b) {
                        return count(data)[b] - count(data)[a];
                    })
                    monthartistsPlaceholder.innerHTML = monthartistsTemplate(response)
                    monthgenresPlaceholder.innerHTML = monthgenresTemplate(result.slice(0, 100)); //this 100 is the number of genres shown
                    monthartworkPlaceholder.innerHTML = monthartworkTemplate(response)
                }
            });
            // Fetch all time
            $.ajax({
                url: 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50&offset=0',
                headers: {
                    'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                    var data = [];
                    for (i = 0; i < response.items.length; i++) {
                        for (j = 0; j < response.items[i].genres.length; j++) {
                            data.push(response.items[i].genres[j])
                        }
                    };
                    var result = Object.keys(count(data)).sort(function(a, b) {
                        return count(data)[b] - count(data)[a];
                    })
                    alltimeartistsPlaceholder.innerHTML = alltimeartistsTemplate(response)
                    alltimegenresPlaceholder.innerHTML = alltimegenresTemplate(result.slice(0, 100)); //this 100 is the number of genres shown
                    alltimeartworkPlaceholder.innerHTML = alltimeartworkTemplate(response)
                }
            });
        } else {
            // render initial screen
            $('#login').show();
            $('#loggedin').hide();
        }
    }
})();
