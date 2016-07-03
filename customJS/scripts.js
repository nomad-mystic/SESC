/*
	Programmer = Keith Murphy
	File = scripts.js
	date Created = 8-8-2015
	Last Mod =  9-20-2015
*/

jQuery(document).ready(function($) {
	////// Naivations 
	// THis is for the about page area non-memeber area 
	$('#aboutPageNAV a').each(function() {
		var siteHref = window.location.href;
	    var stringSiteHref = String(siteHref);
	    var slicedSiteHref = stringSiteHref.slice(40);
		var sitePathname = window.location.pathname;
	    // This is comparing strings and pathways to add current class 
		if ( sitePathname === slicedSiteHref) {
	    	if ('http://specialeducationsupportcenter.org/about-us/' === siteHref) {
	    		$('.aboutPageFirstH4 h4').attr('class', 'currentLeftNavItem');

	        } else if ('http://specialeducationsupportcenter.org/about-us/bootcamps/' === siteHref) {
	    		$('a[href*="' + sitePathname + '"]').find('> h4').attr('class', 'currentLeftNavItem');

		    } else if ('http://specialeducationsupportcenter.org/about-us/our-team/' === siteHref) {
		    	$('a[href*="' + sitePathname + '"]').find('> h4').attr('class', 'currentLeftNavItem');

		  	} else if ('http://specialeducationsupportcenter.org/about-us/contact/' === siteHref) {
				$('a[href*="' + sitePathname + '"]').find('> h4').attr('class', 'currentLeftNavItem');
	  		}
		} // end if 
	}); // end each
	// Goin to be the functions that add current class on pge load for the resources page 
	$('#resourcePageNav a').each(function() {
	    //var siteHref;
	    //var $disabilityNavDiv = $('.disabilityNavDiv'),
        //$disabilityCategoriesNavContent = $('.disabilityCategoriesNavContent');
	    //// This is getting all the pathways to compare them with the href of the current page
	    var siteHref = window.location.href;
	    var stringSiteHref = String(siteHref);
	    var slicedSiteHref = stringSiteHref.slice(40);
		var sitePathname = window.location.pathname;
	    // This is comparing strings and pathways to add current class 
	    if (sitePathname  ===  slicedSiteHref) {
	    	
	    	if('http://specialeducationsupportcenter.org/resources/' === siteHref) {
				$('.resourcesPageNavH4').addClass('currentLeftNavItem');
	    		
	    	} else if ('http://specialeducationsupportcenter.org/resources/idea/' === siteHref) {
	    		$('.IDEAPageNavH4').addClass('currentLeftNavItem navDivLevelTwoItem');
	    	
	    	} else if ('http://specialeducationsupportcenter.org/resources/disability-categories/' === siteHref) {
	    		$('.disabilityDefinedH4').addClass('currentLeftNavItem navDivLevelTwoItem');
	    	
	    	} else if('http://specialeducationsupportcenter.org/resources/agencies-advocates/' === siteHref) {
	    		$('.agenciesNavDivH4').addClass('currentLeftNavItem navDivLevelTwoItem');
	    	
	    	} else {
	    		$('a[href*="' + sitePathname + '"]').find('> h4').attr('class', 'currentLeftNavItem');
	    		$('a[href*="' + sitePathname + '"]').find('> .navDivLevelTwoItem').attr('class', 'currentLeftNavItem navDivLevelTwoItem');
	    	} // end if 
	    } // End if 
	}); // end each 
	// This is going to be the function that adds currentLeftNavItem to the Instructional Support pages 
	$('#instructionalPageNav a').each(function() {
	    var siteHref = window.location.href;
	    var stringSiteHref = String(siteHref);
	    var slicedSiteHref = stringSiteHref.slice(40);
		var sitePathname = window.location.pathname;
	    // This is comparing strings and pathways to add current class 
	    if (sitePathname  ===  slicedSiteHref) {
	    	
	    	if('http://specialeducationsupportcenter.org/instructional-support/' === siteHref) {
				$('.instructionalPageNavH4').addClass('currentLeftNavItem');
	    		
	    	} else if ('http://specialeducationsupportcenter.org/instructional-support/educators-toolbox/' === siteHref) {
	    		$('.schoolResourcesNavParent').addClass('currentLeftNavItem navDivLevelTwoItem');
	    	
	    	} else if ('http://specialeducationsupportcenter.org/instructional-support/classes/' === siteHref) {
	    		$('.classesParent').addClass('currentLeftNavItem');
	    	
	    	} else {
	    		$('a[href*="' + sitePathname + '"]').find('> h4').attr('class', 'currentLeftNavItem');
	    		$('a[href*="' + sitePathname + '"]').find('> .navDivLevelTwoItem').attr('class', 'currentLeftNavItem navDivLevelTwoItem');
	    	} // end if 
	    } // End if 
	}); // end each
    // THis is going to be giving CSS style to the links of the LeftColNav
	$('#stayCurrentNav a').each(function() {
	    var siteHref = window.location.href;
	    var stringSiteHref = String(siteHref);
	    var slicedSiteHref = stringSiteHref.slice(40);
		var sitePathname = window.location.pathname;
	    // This is comparing strings and pathways to add current class
	    if (sitePathname  ===  slicedSiteHref) {
	    	
	    	if('http://specialeducationsupportcenter.org/stay-current/' === siteHref) {
				$('.stayCurrentPageFirstH4 h4').addClass('currentLeftNavItem');
	   
	    	} else if('http://specialeducationsupportcenter.org/stay-current/legislation/' === siteHref) {
	    		$('a[href*="' + sitePathname + '"]').find('> h4').attr('class', 'currentLeftNavItem');
	    	
	    	} else if ('http://specialeducationsupportcenter.org/stay-current/news/' === siteHref) {
	    		$('a[href*="' + sitePathname + '"]').find('> h4').attr('class', 'currentLeftNavItem');

	    	
	    	} else if ('http://specialeducationsupportcenter.org/stay-current/policy-updates/' === siteHref) {
	    		$('a[href*="' + sitePathname + '"]').find('> h4').attr('class', 'currentLeftNavItem');
	    		
	    	} // end if 
	    } // End if 
	}); // end each

    $('.projectsPageLeftNAV a').each(function() {
        var siteHref = window.location.href;
        var stringSiteHref = String(siteHref);
        var slicedSiteHref = stringSiteHref.slice(40);
        var sitePathname = window.location.pathname;
        // This is comparing strings and pathways to add current class
        if (sitePathname  ===  slicedSiteHref) {
            if('http://specialeducationsupportcenter.org/projects/' === siteHref) {
                $('.projectsPageFirstH4 h4').addClass('currentLeftNavItem');

            } else {
                $('a[href*="' + sitePathname + '"]').find('> h4').attr('class', 'currentLeftNavItem');
                $('a[href*="' + sitePathname + '"]').find('> .navDivLevelTwoItem').attr('class', 'currentLeftNavItem navDivLevelTwoItem');
            }
        } // End if
    }); // end each

	// This is going to grab each Nav section that needs to be shown when on current page 
	// Resources pages 
	// Disability Section 
	var $disabilityNavDiv = $('.disabilityNavDiv'),
		$disabilityCategoriesNavContent = $('.disabilityCategoriesNavContent');
	// This is removing the nav items if the user has javascript
	if ($disabilityNavDiv.hasClass('clicked')) {
		$($disabilityCategoriesNavContent).css('display', 'block');

	} else {
		$($disabilityCategoriesNavContent).css('display', 'none');
	} // end if 
	
	// IDEA VAR 
	// THis is for the navigation leftHand Side
	var $IDEANavDivH4 = $('.IDEANavDiv h4'),
		$IDEANavDiv = $('.IDEANavDiv'),
		$IDEANavContent = $('.IDEANavContent');

	if ($IDEANavContent.hasClass('clicked')) {
		$($IDEANavContent).css('display', 'block');
	} else {
		$($IDEANavContent).css('display', 'none');
	}

	var $agenciesAdvoNAVDiv = $('.agenciesAdvoNAVDiv'),
		$agenciesAdvoNAVContent = $('.agenciesAdvoNAVContent');

	if ($agenciesAdvoNAVDiv.hasClass('clicked')) {
		$agenciesAdvoNAVContent.css('display', 'block');

	} else {
        $agenciesAdvoNAVContent.css('display', 'none');
    } // end if

	// THis is going to show nav when in a child of a parent and flip the Arrows on the current Pages for Instructional Pages 

	////////////////////IDEA 
	$($IDEANavDivH4).on('click', function(evnt) {
		evnt.preventDefault();
		IDEANavClickEvent();
	}); // end click
	// For the H4
	var IDEANavClickEvent = function() {
		if($IDEANavDiv.hasClass('clicked')) {
			$('#resourcePageNav .IDEANavDiv h4 span.floatRight').animate({  borderSpacing: 0 }, {
			    step: function(now, fx) {
			      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
			      $(this).css('-moz-transform','rotate('+now+'deg)');
			      $(this).css('transform','rotate('+now+'deg)');
			    },
    			duration:'fast'
			},'linear');
			$IDEANavContent.stop().slideUp('slow');
			$IDEANavDiv.removeClass('clicked');
		} else {
			$('#resourcePageNav .IDEANavDiv h4 span.floatRight').animate({  borderSpacing: 90 }, {
			    step: function(now, fx) {
			      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
			      $(this).css('-moz-transform','rotate('+now+'deg)');
			      $(this).css('transform','rotate('+now+'deg)');
			    },
    			duration:'fast'
			},'linear');
			$IDEANavContent.stop().slideDown('slow');
			$IDEANavDiv.addClass('clicked');
		}
	}; // end IDEANavClickEvent

	////////////////////Disability Categories 
	// tHis is getting the variables for the the left hand side navigation system Resources page disability categories
	
	// This is the animation for the disabilty Cat left side navigation
	// slides down nav and slides up nav 
	// rotates the arrow from facing right to downward
	$('.disabilityNavDiv h4').on('click', function(evnt) {
		evnt.preventDefault();
		disabilityCategoriesClickEvent();
	});
	// for the H4
	var disabilityCategoriesClickEvent = function() {
		if($disabilityNavDiv.hasClass('clicked')) {
			$('#resourcePageNav .disabilityNavDiv h4 span.floatRight').animate({  borderSpacing: 0 }, {
			    step: function(now, fx) {
			      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
			      $(this).css('-moz-transform','rotate('+now+'deg)');
			      $(this).css('transform','rotate('+now+'deg)');
			    },
    			duration:'fast'
			},'linear');
			$disabilityCategoriesNavContent.stop().slideUp('slow');
			$disabilityNavDiv.removeClass('clicked');
		} else {
			$('#resourcePageNav .disabilityNavDiv h4 span.floatRight').animate({  borderSpacing: 90 }, {
			    step: function(now, fx) {
			      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
			      $(this).css('-moz-transform','rotate('+now+'deg)');
			      $(this).css('transform','rotate('+now+'deg)');
			    },
    			duration:'fast'
			},'linear');
			$disabilityCategoriesNavContent.stop().slideDown('slow');
			$disabilityNavDiv.addClass('clicked');
		}

	};
	
	///////////////////////////////// This is for the accordion function of disabilityCatPage
	var $disabilityCategoriesAccordion = $('.disabilityCategoriesAccordion');

	$($disabilityCategoriesAccordion).accordion({
		collapsible: true,
		heightStyle: "content",
		active: false
	}); //end accordion
	/////////////////////////////// Agencies & Advocates
	$('.agenciesAdvoNAVDiv h4').on('click', function(evnt) {
		evnt.preventDefault();
		agenciesAdvocatesClickEvent();
	});
	var agenciesAdvocatesClickEvent = function() {
		if($agenciesAdvoNAVDiv.hasClass('clicked')) {
			$('#resourcePageNav .agenciesAdvoNAVDiv h4 span.floatRight').animate({  borderSpacing: 0 }, {
			    step: function(now, fx) {
			      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
			      $(this).css('-moz-transform','rotate('+now+'deg)');
			      $(this).css('transform','rotate('+now+'deg)');
			    },
    			duration:'fast'
			},'linear');
			$agenciesAdvoNAVContent.stop().slideUp('slow');
			$agenciesAdvoNAVDiv.removeClass('clicked');
		} else {
			$('#resourcePageNav .agenciesAdvoNAVDiv h4 span.floatRight').animate({  borderSpacing: 90 }, {
			    step: function(now, fx) {
			      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
			      $(this).css('-moz-transform','rotate('+now+'deg)');
			      $(this).css('transform','rotate('+now+'deg)');
			    },
    			duration:'fast'
			},'linear');
			$agenciesAdvoNAVContent.stop().slideDown('slow');
			$agenciesAdvoNAVDiv.addClass('clicked');
		}

	};
    /// General Scripts
    //// Accordions
    $('.accordion').accordion({
        collapsible: true,
        heightStyle: "content",
        active: false
    });
    var $accordionH3 = $('.accordion h3');
    $('<span class="flaticon-right39 floatRight"></span>').appendTo($accordionH3);

    /// THis is going to animate the span arrow of the h3's
    $accordionH3.on('click', function(evnt) {
        if($accordionH3.hasClass('clicked')) {
            $(this).find('span.floatRight').stop().animate({  borderSpacing: 0 }, {
                step: function(now) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'fast'
            },'linear');
            $accordionH3.removeClass('clicked');
        } else {
            $(this).find('span.floatRight').stop().animate({  borderSpacing: 90 }, {
                step: function(now) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'fast'
            },'linear');
            $accordionH3.addClass('clicked');
        }
    }); // end $accordionH3.on('click', function(evnt)
    // Test grabbing ::after
    ////////////////////////////////////////////////////////////////////
/////////////// This is going to be the Navigation area animations for the Instructional Support Pages 
	// THis is for the Instructional Support Section of the NAV
	var $schoolResourcesNavContent = $('.schoolResourcesNavContent'),
		$schoolResourcesNavDiv = $('.schoolResourcesNavDiv');
	
	if ($schoolResourcesNavDiv.hasClass('clicked')) {
		$($schoolResourcesNavContent).css('display', 'block');
	
	} else {
		$($schoolResourcesNavContent).css('display', 'none');
	
	}
	// Click event for Nav 
	$('.schoolResourcesNavDiv h4').on('click', function(evnt) {
		evnt.preventDefault();
		schoolResourcesClickEvent();
	}); // end schoolResourcesNavDiv Click event 
	var schoolResourcesClickEvent = function() {
		if($schoolResourcesNavDiv.hasClass('clicked')) {
			$('#instructionalPageNav .schoolResourcesNavDiv h4 span.floatRight').animate({  borderSpacing: 0 }, {
			    step: function(now) {
			      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
			      $(this).css('-moz-transform','rotate('+now+'deg)');
			      $(this).css('transform','rotate('+now+'deg)');
			    },
    			duration:'fast'
			},'linear');
			$schoolResourcesNavContent.stop().slideUp('slow');
			$schoolResourcesNavDiv.removeClass('clicked');
		} else {
			$('#instructionalPageNav .schoolResourcesNavDiv h4 span.floatRight').animate({  borderSpacing: 90 }, {
			    step: function(now) {
			      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
			      $(this).css('-moz-transform','rotate('+now+'deg)');
			      $(this).css('transform','rotate('+now+'deg)');
			    },
    			duration:'fast'
			},'linear');
			$schoolResourcesNavContent.stop().slideDown('slow');
			$schoolResourcesNavDiv.addClass('clicked');
		}

	};
///////////////////////// This for the Training and coaching Section of the NAV 
	var $trainingCoachingNavContent = $('.trainingCoachingNavContent'),
		$trainingCoachingNavDiv = $('.trainingCoachingNavDiv');
	
	
	if ($trainingCoachingNavDiv.hasClass('clicked')) {
		$trainingCoachingNavContent.css('display', 'block');
	
	} else {
		$trainingCoachingNavContent.css('display', 'none');
	
	}
	// THis is going to show nav when in a child of a parent and flip the Arrows on the current Pages for all pages
    function leftNAVAnimation() {
        var sitePathname = window.location.pathname;
        var sitePathnameString = String(sitePathname);
        var disabilityCategoriesPageString = sitePathnameString.slice(10, 33);
        var IDEAPageString = sitePathnameString.slice(10, 16);
        var educatorsToolboxPageString = sitePathnameString.slice(22 , 41);
        var trainingCoachingPageString = sitePathnameString.slice(22, 32);
        var agenciesAdvos = sitePathnameString.slice(10, 30);
        if (disabilityCategoriesPageString === '/disability-categories/') {
            $('#resourcePageNav .disabilityNavDiv h4 span.floatRight').animate({  borderSpacing: 90 }, {
                step: function(now) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'fast'
            },'linear');
            $disabilityCategoriesNavContent.stop().slideDown('slow');
            $disabilityNavDiv.addClass('clicked');
        } else if (IDEAPageString === '/idea/') {
            $('#resourcePageNav .IDEANavDiv h4 span.floatRight').animate({  borderSpacing: 90 }, {
                step: function(now) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'fast'
            },'linear');
            $IDEANavContent.stop().slideDown('slow');
            $IDEANavDiv.addClass('clicked');

        } else if (educatorsToolboxPageString === '/educators-toolbox/') {
            $('#instructionalPageNav .schoolResourcesNavDiv h4 span.floatRight').animate({  borderSpacing: 90 }, {
                step: function(now) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'fast'
            },'linear');
            $schoolResourcesNavContent.stop().slideDown('slow');
            $schoolResourcesNavDiv.addClass('clicked');
        } else if (trainingCoachingPageString === '/training/') {
            $('.trainingCoachingNavDiv h4 span.floatRight').animate({  borderSpacing: 90 }, {
                step: function(now) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'fast'
            },'linear');
            $trainingCoachingNavContent.stop().slideDown('slow');
            $trainingCoachingNavDiv.addClass('clicked');
        } else if (agenciesAdvos === '/agencies-advocates/') {
            $('.agenciesAdvoNAVDiv h4 span.floatRight').animate({  borderSpacing: 90 }, {
                step: function(now) {
                    $(this).css('-webkit-transform','rotate('+now+'deg)');
                    $(this).css('-moz-transform','rotate('+now+'deg)');
                    $(this).css('transform','rotate('+now+'deg)');
                },
                duration:'fast'
            },'linear');
            $agenciesAdvoNAVDiv.addClass('clicked');
            $agenciesAdvoNAVContent.stop().slideDown('slow');

        } // end if
    } // end resourcesNAVAnimation()
    leftNAVAnimation();
///////////////////////////////////////////////// For widget areas 
//This is going to change the pictures and links for the right sideBar area Primary
    function sidebarElementSwap() {

        var siteHref = window.location.href;
        var sitePathname = window.location.pathname;
        var stringSitePath = String(sitePathname);

        // resources pages
        var slicedResourcesPath = stringSitePath.slice(0,11);
        var slicedIDEAPath = stringSitePath.substr(10, 6);
        var slicedDisabilityPath = stringSitePath.substr(10, 23);
        var slicedAgenciesAdvosPath = stringSitePath.substr(10, 20);
        var slicedStateNeedsPath = stringSitePath.substr(10, 22);
        var slicedFamiliesResources = stringSitePath.substr(10, 22);
        var slicedStudentsResources = stringSitePath.substr(10, 22);
        // Instructional Support Pages
        var slicedInstructionalSupport = stringSitePath.substr(0, 23);
        var bootcampsHref = 'http://specialeducationsupportcenter.org/instructional-support/training/bootcamps/';
        var extensionsHref = 'http://specialeducationsupportcenter.org/instructional-support/training/extensions/';
        // Projects pages
        var slicedProjects = stringSitePath.substr(0, 10);

        // general var
        var image = document.getElementById('rightSidebarPicture');
        var suggestResourceForm = $('.suggestResourceForm');
        var askQuestion = $('.askQuestion');
        var signUpWEA = $('.signUpWEA');
		var sidebarHandbook = $('.sidebarHandbook');
        //console.log(siteHref + " THis is the site heft");
        //console.log(siteHref.length + 'This is the length of the siteHref');
        //console.log(sitePathname + ' THis is the Path name');
        //console.log(slicedProjects + ' this is the slided path line');
        // Instructional Support
        if(bootcampsHref === siteHref || extensionsHref === siteHref) {
            image.src = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/10/kidsForLogo.jpg';
            image.alt = 'This is an illustration of three kid playing from Special Education Support Center Logo';
            console.log('This way');
            signUpWEA.css('display', 'block');
            suggestResourceForm.css('display', 'block');
            askQuestion.css('display', 'block');

        } else if (slicedInstructionalSupport === '/instructional-support/') {
            image.src = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/10/kidsForLogo.jpg';
            image.alt = 'This is an illustration of three kid playing from Special Education Support Center Logo';

            suggestResourceForm.css('display', 'block');
            askQuestion.css('display', 'block');
			sidebarHandbook.css('display', 'block');
        }
        // this only shows on one page training
        if (sitePathname === '/instructional-support/training/') {
            $('.signUpTraining').css('display', 'block');
        }
        // for resources pages
        if(sitePathname === slicedResourcesPath) {
            var ResourcesImagePath = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/10/kidsForLogo.jpg';
            image.src = ResourcesImagePath;

            suggestResourceForm.css('display', 'block');
            askQuestion.css('display', 'block');
			sidebarHandbook.css('display', 'block');

        } else if(slicedIDEAPath === '/idea/') {
            var IDEAImagePath = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/10/IDEA.jpg';
            image.src = IDEAImagePath;

            suggestResourceForm.css('display', 'block');
            askQuestion.css('display', 'block');
			sidebarHandbook.css('display', 'block');

        } else if(slicedDisabilityPath === '/disability-categories/') {
            var disabilityImagePath = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/10/disabilityCategories.jpg';
            image.src = disabilityImagePath;

            suggestResourceForm.css('display', 'block');
            askQuestion.css('display', 'block');
			sidebarHandbook.css('display', 'block');

        } else if(slicedAgenciesAdvosPath === '/agencies-advocates/') {
            var agenciesAdvosImagePath = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/10/agenciesAdvos.jpg';
            image.src = agenciesAdvosImagePath;

            suggestResourceForm.css('display', 'block');
            askQuestion.css('display', 'block');
			sidebarHandbook.css('display', 'block');

        } else if(slicedStateNeedsPath === '/state-needs-projects/') {
            var stateNeedsImagePath = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/10/stateNeedProjects.jpg';
            image.src = stateNeedsImagePath;

            suggestResourceForm.css('display', 'block');
            askQuestion.css('display', 'block');
			sidebarHandbook.css('display', 'block');

        } else if(slicedFamiliesResources === '/resources-families/') {
            var familiesImagePath = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/11/supportForFamilies.jpg';
            image.src = familiesImagePath;

            suggestResourceForm.css('display', 'block');
            askQuestion.css('display', 'block');
			sidebarHandbook.css('display', 'block');
        } else if(slicedStudentsResources === '/resources-students/') {
            var studentsImagePath = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/10/supportForStudents.jpg';
            image.src = studentsImagePath;

            suggestResourceForm.css('display', 'block');
            askQuestion.css('display', 'block');
			sidebarHandbook.css('display', 'block');
        } else {
            image.src = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/10/kidsForLogo.jpg';
            image.alt = 'This is an illustration of three kid playing from Special Education Support Center Logo';
        }
        // Projects Page
        if(slicedProjects === '/projects/') {
            image.src = 'http://specialeducationsupportcenter.org/wp-content/uploads/2015/10/kidsForLogo.jpg';
            image.alt = 'This is an illustration of three kid playing from Special Education Support Center Logo';

            suggestResourceForm.css('display', 'none');
            askQuestion.css('display', 'block');
			sidebarHandbook.css('display', 'block');
        }
    } // end function
    sidebarElementSwap();



    // Start Google Analytics
    var sidebarHandbook = $('.sidebarHandbook');
    sidebarHandbook.on('click', function() {
       console.log('handbook Clicked');
        ga('send', 'event', {
            'eventCategory': 'Handbook',
            'eventAction': 'Link to Handbook in sidebar was clicked',
            'eventLabel': 'Handbook Sidebar Link'
        });
    });
}); // End Ready 

////////////////////////////////////// Not Needed for the site because thing have change in the way a user navigates through the site 
	// GOOD PRACTICE 
	// THis is going to jump user to the link chosen for the navDivLevelTwoItem
	// $('.navDivLevelTwoContent a').on('click', function(evnt) {
	// 	var f_activeNumber,
	// 		activeNumber,
	// 		targetHref,
	// 		sliceTargetHref,
	// 		targetHrefScrollObject;
		
	// 	var	activeNumber = evnt.target.getAttribute('data-accordNumber');

	// 	f_activeNumber = Number(activeNumber);

	// 	$($disabilityCategoriesAccordion).accordion( "option", 'active', f_activeNumber);


	// 	targetHref = evnt.currentTarget.attributes[0].nodeValue;
	// 	// sliceTargetHref = targetHref.slice(1);
	// 	targetHrefScrollObject = targetHref;
	// 	var stringTest = targetHrefScrollObject.toString(); 

	// 	testText = $(event.target).text(); 
	// 	console.log(testText);
	// 	// var resourceIntellectualDisabilities = $('#resourceIntellectualDisabilities');
	// 	// resourceIntellectualDisabilities.scrollIntoView();
	// }); // End navDivLevelTwoContent Click 