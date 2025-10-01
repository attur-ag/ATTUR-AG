document.addEventListener("DOMContentLoaded", function () {
    // Tamil + English verses - (20 verses defined here)
    const verses = [
        {
            verse: "சீயோன் குமாரத்தியே, கெம்பீரித்துப்பாடு! இதோ, நான் வந்து உன் நடுவில் வாசம்பண்ணுவேன் என்று கர்த்தர் சொல்லுகிறார். (சகரியா 2:10)",
            engverse: "‘Shout And Be Glad, O Daughter Of Zion. For I Am Coming, And I Will Live Among You,’ Declares The Lord. (Zechariah 2:10)"
        },
        {
            verse: "கர்த்தர் என் மேய்ப்பனாக இருக்கிறார், எனக்கு குறைவில்லாது போகாது. (சங்கீதம் 23:1)",
            engverse: "‘The Lord is my shepherd; I shall not want.’ (Psalm 23:1)"
        },
        {
            verse: "நீங்கள் பயப்படாதே; நான் உங்களோடு இருக்கிறேன். (ஏசாயா 41:10)",
            engverse: "‘Do not fear, for I am with you.’ (Isaiah 41:10)"
        },
        {
            verse: "கர்த்தர் உன்னை ஆசீர்வதித்து, உன்னைக் காப்பாற்றுவாராக. (எண்ணாகமம் 6:24)",
            engverse: "‘The Lord bless you and keep you.’ (Numbers 6:24)"
        },
        {
            verse: "நான் உன்னை விட்டுப் பிரியமாட்டேன், உன்னைக் கைவிடமாட்டேன். (எபிரேயர் 13:5)",
            engverse: "‘I will never leave you nor forsake you.’ (Hebrews 13:5)"
        },
        // --- Added Verses (Total 20) ---
        {
            verse: "பூரண இருதயத்தோடே கர்த்தரைத் தேடுகிறவர்கள் பாக்கியவான்கள். (சங்கீதம் 119:2)",
            engverse: "‘Blessed are those who keep his statutes and seek him with all their heart.’ (Psalm 119:2)"
        },
        {
            verse: "விசுவாசத்தினாலே நீதிமான் பிழைப்பான். (ரோமர் 1:17)",
            engverse: "‘The righteous will live by faith.’ (Romans 1:17)"
        },
        {
            verse: "கர்த்தருக்குக் காத்திருக்கிறவர்களோ புதுப்பெலனடைவார்கள். (ஏசாயா 40:31)",
            engverse: "‘But those who hope in the Lord will renew their strength.’ (Isaiah 40:31)"
        },
        {
            verse: "உங்கள் இருதயம் கலங்காதிருப்பதாக; தேவனிடத்தில் விசுவாசமாயிருங்கள், என்னிடத்திலும் விசுவாசமாயிருங்கள். (யோவான் 14:1)",
            engverse: "‘Do not let your hearts be troubled. Trust in God; trust also in me.’ (John 14:1)"
        },
        {
            verse: "நான் கிறிஸ்துவினாலே எல்லாவற்றையுஞ் செய்ய எனக்குப் பெலனுண்டு. (பிலிப்பியர் 4:13)",
            engverse: "‘I can do all this through him who gives me strength.’ (Philippians 4:13)"
        },
        {
            verse: "தேவனே என் பெலன், அவர் என் வழியைச் செவ்வைப்படுத்துகிறார். (சங்கீதம் 18:32)",
            engverse: "‘It is God who arms me with strength and makes my way perfect.’ (Psalm 18:32)"
        },
        {
            verse: "சமாதானத்தை உங்களுக்கு வைத்துப்போகிறேன், என்னுடைய சமாதானத்தையே உங்களுக்குக் கொடுக்கிறேன். (யோவான் 14:27)",
            engverse: "‘Peace I leave with you; my peace I give you.’ (John 14:27)"
        },
        {
            verse: "அவர் நம்முடைய அக்கிரமங்களுக்காகக் காயமடைந்தார். (ஏசாயா 53:5)",
            engverse: "‘But he was pierced for our transgressions.’ (Isaiah 53:5)"
        },
        {
            verse: "நம்முடைய தேவன் இரக்கமும் உருக்கமுமுள்ளவர். (சங்கீதம் 116:5)",
            engverse: "‘The Lord is gracious and righteous; our God is full of compassion.’ (Psalm 116:5)"
        },
        {
            verse: "கர்த்தருக்குள் எப்போதும் சந்தோஷமாயிருங்கள்; சந்தோஷமாயிருங்கள் என்று மறுபடியும் சொல்லுகிறேன். (பிலிப்பியர் 4:4)",
            engverse: "‘Rejoice in the Lord always. I will say it again: Rejoice!’ (Philippians 4:4)"
        },
        {
            verse: "அவர் உங்கள் பாரத்தை நாள்தோறும் சுமக்கிறார். (சங்கீதம் 68:19)",
            engverse: "‘Praise be to the Lord, to God our Savior, who daily bears our burdens.’ (Psalm 68:19)"
        },
        {
            verse: "கர்த்தர் நல்லவர், அவர் கிருபை என்றென்றைக்குமுள்ளது. (சங்கீதம் 106:1)",
            engverse: "‘Praise the Lord. Give thanks to the Lord, for he is good; his love endures forever.’ (Psalm 106:1)"
        },
        {
            verse: "ஆண்டவரே, உம்முடைய கிருபை வானபரியந்தம் உள்ளது. (சங்கீதம் 36:5)",
            engverse: "‘Your love, Lord, reaches to the heavens.’ (Psalm 36:5)"
        },
        {
            verse: "தேவனுடைய கிருபையினாலே எல்லாவற்றையும் செய்யலாம். (மத்தேயு 19:26)",
            engverse: "‘With God all things are possible.’ (Matthew 19:26)"
        },
        {
            verse: "நீதியுள்ளவனுடைய ஜெபம் மிகுந்த பலனுள்ளது. (யாக்கோபு 5:16)",
            engverse: "‘The prayer of a righteous person is powerful and effective.’ (James 5:16)"
        }
    ];

    // Pick a random verse
    const randomIndex = Math.floor(Math.random() * verses.length);
    const selectedVerse = verses[randomIndex];

    // Set verses into the <p> tags with error handling (Bible verses)
    const tamilElement = document.getElementById("வாக்குத்தத்தம்-ta");
    const englishElement = document.getElementById("வாக்குத்தத்தம்-en");
    
    if (tamilElement) {
        tamilElement.textContent = selectedVerse.verse;
    }
    
    if (englishElement) {
        englishElement.textContent = selectedVerse.engverse;
    }

    // Update current year in footer
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Call updateDateTime immediately when the page loads
    updateDateTime();
    // Start the continuous update
    setInterval(updateDateTime, 1000);
});


// Date & Time updater - MODIFIED to only use currentDate and currentTime
function updateDateTime() {
    const now = new Date();

    // Options for Date (e.g., Wednesday, 1 October 2025)
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    // Options for Time (e.g., 09:46:32 AM)
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
    };

    const formattedDate = now.toLocaleString('en-GB', dateOptions);
    const formattedTime = now.toLocaleString('en-GB', timeOptions);

    // TARGET ELEMENTS
    const dateElement = document.getElementById("currentDate");
    const timeElement = document.getElementById("currentTime");
    
    if (dateElement && timeElement) {
        // Update separate elements for attractive styling
        dateElement.textContent = formattedDate + ", "; // Add comma for separation
        timeElement.textContent = formattedTime;
    } 
    // The previous fallback (combinedElement) logic is removed for simplicity 
    // and to enforce the use of the attractive two-span structure.
}

// NOTE: setInterval and initial call are now inside the DOMContentLoaded listener.