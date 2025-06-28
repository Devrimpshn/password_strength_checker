// DOM Elements
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const strengthFill = document.getElementById('strengthFill');
const strengthText = document.getElementById('strengthText');
const scoreCircle = document.getElementById('scoreCircle');
const scoreText = document.getElementById('scoreText');
const suggestionsList = document.getElementById('suggestionsList');
const crackTime = document.getElementById('crackTime');
const combinations = document.getElementById('combinations');
const riskLevel = document.getElementById('riskLevel');

// Criteria elements
const lengthCriterion = document.getElementById('lengthCriterion');
const uppercaseCriterion = document.getElementById('uppercaseCriterion');
const lowercaseCriterion = document.getElementById('lowercaseCriterion');
const numberCriterion = document.getElementById('numberCriterion');
const specialCriterion = document.getElementById('specialCriterion');
const noCommonCriterion = document.getElementById('noCommonCriterion');

// Common passwords list (top 100)
const commonPasswords = [
    '123456', 'password', '123456789', '12345678', '12345', 'qwerty', 'abc123',
    '111111', '1234567', '1234', 'admin', 'letmein', 'welcome', 'monkey',
    'password123', '1234567890', 'dragon', 'master', 'hello', 'freedom',
    'whatever', 'qazwsx', 'trustno1', 'jordan', 'harley', 'hunter', 'buster',
    'soccer', 'tiger', 'charlie', 'thomas', 'russia', 'jordan23', 'eagle1',
    'shelby', 'baseball', 'golf', 'fishing', 'cookie', 'mickey', 'peanut',
    'shadow', 'michael', 'charlie1', 'andrew', 'love', 'robert', 'america',
    'ginger', 'hammer', 'silver', 'michelle', 'secret', 'diamond', 'joshua',
    'maggie', 'buster1', 'hello123', 'charlie123', 'qwerty123', '123456a',
    'football', 'baseball1', 'welcome123', 'monkey123', 'letmein123',
    'dragon123', 'master123', 'hello123', 'freedom123', 'whatever123',
    'qazwsx123', 'trustno1123', 'jordan123', 'harley123', 'hunter123',
    'buster123', 'soccer123', 'tiger123', 'charlie123', 'thomas123',
    'russia123', 'jordan23123', 'eagle1123', 'shelby123', 'baseball123',
    'golf123', 'fishing123', 'cookie123', 'mickey123', 'peanut123',
    'shadow123', 'michael123', 'charlie1123', 'andrew123', 'love123',
    'robert123', 'america123', 'ginger123', 'hammer123', 'silver123'
];

// Popular names (top 100 most common names)
const popularNames = [
    'james', 'mary', 'john', 'patricia', 'robert', 'jennifer', 'michael', 'linda',
    'william', 'elizabeth', 'david', 'barbara', 'richard', 'susan', 'joseph', 'jessica',
    'thomas', 'sarah', 'christopher', 'karen', 'charles', 'nancy', 'daniel', 'lisa',
    'matthew', 'betty', 'anthony', 'helen', 'mark', 'sandra', 'donald', 'donna',
    'steven', 'carol', 'paul', 'ruth', 'andrew', 'sharon', 'joshua', 'michelle',
    'kenneth', 'laura', 'kevin', 'emily', 'brian', 'kimberly', 'george', 'deborah',
    'edward', 'dorothy', 'ronald', 'lisa', 'timothy', 'nancy', 'jason', 'karen',
    'jeffrey', 'betty', 'ryan', 'helen', 'jacob', 'sandra', 'gary', 'donna',
    'nicholas', 'carol', 'eric', 'ruth', 'jonathan', 'sharon', 'stephen', 'michelle',
    'larry', 'laura', 'justin', 'emily', 'scott', 'kimberly', 'brandon', 'deborah',
    'benjamin', 'dorothy', 'frank', 'lisa', 'gregory', 'nancy', 'raymond', 'karen',
    'samuel', 'betty', 'patrick', 'helen', 'alexander', 'sandra', 'jack', 'donna',
    'dennis', 'carol', 'jerry', 'ruth', 'tyler', 'sharon', 'aaron', 'michelle',
    'jose', 'laura', 'adam', 'emily', 'nathan', 'kimberly', 'henry', 'deborah',
    'douglas', 'dorothy', 'zachary', 'lisa', 'peter', 'nancy', 'kyle', 'karen',
    'walter', 'betty', 'ethan', 'helen', 'jeremy', 'sandra', 'harold', 'donna',
    'carl', 'carol', 'keith', 'ruth', 'roger', 'sharon', 'gerald', 'michelle',
    'christian', 'laura', 'terry', 'emily', 'sean', 'kimberly', 'gavin', 'deborah',
    'austin', 'dorothy', 'noah', 'lisa', 'lawrence', 'nancy', 'jesse', 'karen',
    'joe', 'betty', 'bryan', 'helen', 'billy', 'sandra', 'jordan', 'donna',
    'albert', 'carol', 'dylan', 'ruth', 'bruce', 'sharon', 'willie', 'michelle',
    'gabriel', 'laura', 'alan', 'emily', 'juan', 'kimberly', 'logan', 'deborah',
    'wayne', 'dorothy', 'roy', 'lisa', 'ralph', 'nancy', 'randy', 'karen',
    'eugene', 'betty', 'vincent', 'helen', 'russell', 'sandra', 'elijah', 'donna',
    'louis', 'carol', 'bobby', 'ruth', 'philip', 'sharon', 'johnny', 'michelle',
    // Türkçe popüler isimler
    'ahmet', 'mehmet', 'mustafa', 'ali', 'hüseyin', 'ibrahim', 'osman', 'yusuf', 'murat', 'ömer',
    'ramazan', 'ismail', 'emre', 'halil', 'mehmet', 'fatih', 'recep', 'burak', 'enes', 'serkan',
    'ayşe', 'fatma', 'emine', 'hatice', 'zeynep', 'elif', 'meryem', 'esra', 'sultan', 'sevgi',
    'gül', 'gülsüm', 'canan', 'yasemin', 'büşra', 'kübra', 'hilal', 'rabia', 'melike', 'tuğba',
    'deniz', 'can', 'arda', 'berk', 'ece', 'melis', 'selin', 'naz', 'dilara', 'irem',
    'aydan', 'aylin', 'aslı', 'berna', 'cem', 'cemre', 'didem', 'dilan', 'eda', 'eda',
    'gizem', 'gökhan', 'kaan', 'kerem', 'melih', 'onur', 'özge', 'özlem', 'seda', 'sinem',
    'tolga', 'umut', 'volkan', 'yasin', 'yavuz', 'yeliz', 'yıldız', 'yusuf', 'zeynep', 'şeyma'
];

// Famous events, years, and cultural references
const famousEvents = [
    '1945', 'ww2', 'worldwar2', 'worldwar', 'nazi', 'hitler', 'holocaust',
    '1969', 'moon', 'apollo', 'nasa', 'space', 'armstrong',
    '1989', 'berlin', 'wall', 'fall', 'communism', 'coldwar',
    '2001', '911', 'september', 'terrorism', 'bush', 'alqaeda',
    '2008', 'crisis', 'recession', 'obama', 'bailout', 'economy',
    '2020', 'covid', 'corona', 'pandemic', 'lockdown', 'virus',
    'starwars', 'luke', 'vader', 'yoda', 'force', 'jedi', 'sith',
    'harrypotter', 'harry', 'potter', 'voldemort', 'hogwarts', 'magic',
    'marvel', 'ironman', 'captain', 'america', 'thor', 'hulk', 'spiderman',
    'disney', 'mickey', 'mouse', 'donald', 'duck', 'goofy', 'pluto',
    'nintendo', 'mario', 'luigi', 'zelda', 'link', 'pokemon', 'pikachu',
    'facebook', 'google', 'apple', 'microsoft', 'amazon', 'netflix',
    'youtube', 'instagram', 'twitter', 'tiktok', 'snapchat', 'whatsapp',
    'superman', 'batman', 'spiderman', 'wonderwoman', 'flash', 'aquaman',
    'gameofthrones', 'got', 'stark', 'lannister', 'targaryen', 'dragon',
    'breakingbad', 'walter', 'white', 'heisenberg', 'jesse', 'pinkman',
    'friends', 'ross', 'rachel', 'monica', 'chandler', 'joey', 'phoebe',
    'simpsons', 'homer', 'marge', 'bart', 'lisa', 'maggie', 'springfield',
    'southpark', 'cartman', 'kenny', 'stan', 'kyle', 'butters', 'denver',
    'familyguy', 'peter', 'griffin', 'lois', 'stewie', 'brian', 'quahog',
    'office', 'michael', 'scott', 'jim', 'pam', 'dwight', 'dunder', 'mifflin',
    'parks', 'leslie', 'ron', 'swanson', 'andy', 'april', 'pawnee',
    'bigbang', 'sheldon', 'leonard', 'penny', 'raj', 'howard', 'caltech',
    'modernfamily', 'claire', 'phil', 'gloria', 'jay', 'mitchell', 'cam',
    'greys', 'anatomy', 'meredith', 'derek', 'cristina', 'alex', 'seattle',
    'house', 'hugh', 'laurie', 'wilson', 'cuddy', 'foreman', 'princeton',
    'csi', 'grissom', 'catherine', 'nick', 'sarah', 'warrick', 'vegas',
    'ncis', 'gibbs', 'tony', 'ziva', 'mcgee', 'abby', 'navy', 'marine',
    'criminal', 'minds', 'hotch', 'reid', 'morgan', 'garcia', 'prentiss',
    'bones', 'temperance', 'booth', 'angela', 'hodgins', 'sweets', 'fbi',
    'castle', 'richard', 'beckett', 'esposito', 'ryan', 'laney', 'nypd',
    'mentalist', 'patrick', 'jane', 'lisbon', 'rigsby', 'van', 'pelt',
    'white', 'collar', 'neal', 'caffrey', 'peter', 'burke', 'mozzie',
    'suits', 'harvey', 'specter', 'mike', 'ross', 'rachel', 'pearson',
    'breaking', 'bad', 'walter', 'white', 'jesse', 'pinkman', 'skyler',
    'better', 'call', 'saul', 'jimmy', 'mcgill', 'kim', 'wexler', 'chuck',
    'el', 'camino', 'jesse', 'pinkman', 'todd', 'alquist', 'skinny', 'pete',
    'ozark', 'marty', 'byrde', 'wendy', 'ruth', 'langmore', 'navarro',
    'narcos', 'pablo', 'escobar', 'steve', 'murphy', 'javier', 'pena',
    'money', 'heist', 'professor', 'tokyo', 'rio', 'nairobi', 'berlin',
    'stranger', 'things', 'eleven', 'mike', 'dustin', 'lucas', 'will',
    'wednesday', 'addams', 'jenna', 'ortega', 'tim', 'burton', 'netflix',
    'squid', 'game', 'gi', 'hun', 'seong', 'ji', 'yeon', 'sang', 'woo',
    'bridgerton', 'daphne', 'simon', 'anthony', 'kate', 'penelope', 'colin',
    'witcher', 'geralt', 'yennefer', 'ciri', 'jaskier', 'triss', 'nilfgaard',
    'mandalorian', 'din', 'djarin', 'grogu', 'baby', 'yoda', 'bo', 'katan',
    'wandavision', 'wanda', 'vision', 'agatha', 'harkness', 'monica', 'rambeau',
    'falcon', 'winter', 'soldier', 'sam', 'wilson', 'bucky', 'barnes', 'john',
    'loki', 'sylvie', 'mobius', 'ravonna', 'renslayer', 'he', 'who', 'remains',
    'hawkeye', 'clint', 'barton', 'kate', 'bishop', 'yelena', 'belova',
    'ms', 'marvel', 'kamala', 'khan', 'bruno', 'carrelli', 'nakia', 'bahadir',
    'she', 'hulk', 'jennifer', 'walters', 'bruce', 'banner', 'titan', 'abomination',
    'black', 'panther', 'wakanda', 'forever', 'shuri', 'namor', 'attuma', 'nakia',
    'ant', 'man', 'quantumania', 'scott', 'lang', 'hope', 'van', 'dyne', 'kang',
    'guardians', 'galaxy', 'peter', 'quill', 'gamora', 'drax', 'rocket', 'groot',
    'thor', 'love', 'thunder', 'jane', 'foster', 'valkyrie', 'korg', 'meik',
    'doctor', 'strange', 'multiverse', 'madness', 'wanda', 'maximoff', 'america',
    'black', 'widow', 'natasha', 'romanoff', 'yelena', 'belova', 'red', 'guardian',
    'eternals', 'ikaris', 'sersi', 'thena', 'ajak', 'kingo', 'sprite', 'druig',
    'shang', 'chi', 'legend', 'ten', 'rings', 'xu', 'wenwu', 'xialing', 'katy',
    'spider', 'man', 'no', 'way', 'home', 'peter', 'parker', 'mj', 'ned', 'may',
    'venom', 'let', 'there', 'carnage', 'eddie', 'brock', 'cletus', 'kasady',
    'morbius', 'michael', 'morbius', 'milo', 'morbius', 'martine', 'bancroft',
    'madame', 'web', 'cassandra', 'web', 'julia', 'carpenter', 'mattie', 'franklin',
    'kraven', 'hunter', 'sergei', 'kravinoff', 'dimitri', 'smerdyakov', 'chameleon',
    'el', 'muerto', 'maria', 'vasquez', 'tombstone', 'lonnie', 'lincoln', 'hammerhead',
    'silver', 'sable', 'silver', 'sable', 'black', 'cat', 'felicia', 'hardy',
    'prowler', 'aaron', 'davis', 'miles', 'morales', 'uncle', 'aaron', 'jefferson',
    'miguel', 'ohara', 'spider', 'man', '2099', 'lyla', 'gabriel', 'ohara', 'dana',
    'peter', 'b', 'parker', 'spider', 'man', 'noir', 'may', 'parker', 'ben', 'uncle',
    'peni', 'parker', 'spider', 'byte', 'spider', 'ham', 'peter', 'porker', 'spider',
    'man', 'india', 'pavitr', 'prabhakar', 'maya', 'prabhakar', 'uncle', 'bhima',
    'spider', 'man', 'uk', 'hobie', 'brown', 'spider', 'punk', 'rio', 'morales',
    'spider', 'man', 'mexico', 'miguel', 'ohara', 'spider', 'man', '2099', 'lyla',
    'spider', 'man', 'venom', 'eddie', 'brock', 'venom', 'symbiote', 'carnage',
    'spider', 'man', 'miles', 'morales', 'gwen', 'stacy', 'spider', 'woman', 'ghost',
    'spider', 'man', 'peter', 'parker', 'mj', 'watson', 'ned', 'leeds', 'aunt', 'may',
    'spider', 'man', 'homecoming', 'vulture', 'adrian', 'toomes', 'liz', 'toomes',
    'spider', 'man', 'far', 'from', 'home', 'mysterio', 'quentin', 'beck', 'mj',
    'spider', 'man', 'no', 'way', 'home', 'doctor', 'strange', 'multiverse', 'madness',
    'spider', 'man', 'into', 'spider', 'verse', 'miles', 'morales', 'peter', 'parker',
    'spider', 'man', 'across', 'spider', 'verse', 'gwen', 'stacy', 'spider', 'woman',
    'spider', 'man', 'beyond', 'spider', 'verse', 'miles', 'morales', 'spider', 'man',
    'spider', 'man', 'ps4', 'peter', 'parker', 'miles', 'morales', 'mary', 'jane',
    'spider', 'man', 'miles', 'morales', 'ps5', 'miles', 'morales', 'ganke', 'lee',
    'spider', 'man', '2', 'ps5', 'peter', 'parker', 'miles', 'morales', 'venom',
    'spider', 'man', 'web', 'of', 'shadows', 'peter', 'parker', 'venom', 'symbiote',
    'spider', 'man', 'shattered', 'dimensions', 'spider', 'man', 'noir', 'amazing',
    'spider', 'man', 'ultimate', 'spider', 'man', 'spider', 'man', 'edge', 'time',
    'spider', 'man', 'friend', 'foe', 'spider', 'man', 'dimension', 'spider', 'man',
    'spider', 'man', 'web', 'spider', 'man', 'web', 'spider', 'man', 'web', 'spider'
];

// Password strength analyzer
class PasswordStrengthAnalyzer {
    constructor() {
        this.password = '';
        this.score = 0;
        this.strength = 'very-weak';
        this.suggestions = [];
    }

    analyze(password) {
        this.password = password;
        this.score = 0;
        this.suggestions = [];
        
        console.log('Password:', password, 'Length:', password.length);
        
        if (!password) {
            return this.getResult();
        }

        // Length analysis
        this.analyzeLength();
        
        // Character variety analysis
        this.analyzeCharacterVariety();
        
        // Pattern analysis
        this.analyzePatterns();
        
        // Common password check
        this.checkCommonPassword();
        
        // Advanced security checks
        this.checkPersonalInfo();
        this.checkFamousReferences();
        this.checkDatePatterns();
        
        // Calculate final score and strength
        this.calculateFinalScore();
        
        return this.getResult();
    }

    analyzeLength() {
        const length = this.password.length;
        
        if (length >= 12) {
            this.score += 25;
        } else if (length >= 10) {
            this.score += 20;
        } else if (length >= 8) {
            this.score += 15;
        } else if (length >= 6) {
            this.score += 10;
        } else {
            this.score += 5;
        }

        if (length < 8) {
            this.suggestions.push('Make your password at least 8 characters long');
        } else if (length < 12) {
            this.suggestions.push('Make your password 12 characters or longer');
        }
    }

    analyzeCharacterVariety() {
        const hasUppercase = /[A-Z]/.test(this.password);
        const hasLowercase = /[a-z]/.test(this.password);
        const hasNumbers = /\d/.test(this.password);
        const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password);

        if (hasUppercase) this.score += 10;
        if (hasLowercase) this.score += 10;
        if (hasNumbers) this.score += 10;
        if (hasSpecial) this.score += 15;

        if (!hasUppercase) {
            this.suggestions.push('Add uppercase letters (A-Z)');
        }
        if (!hasLowercase) {
            this.suggestions.push('Add lowercase letters (a-z)');
        }
        if (!hasNumbers) {
            this.suggestions.push('Add numbers (0-9)');
        }
        if (!hasSpecial) {
            this.suggestions.push('Add special characters (!@#$%^&*_+-)');
        }
    }

    analyzePatterns() {
        // Check for repeated characters
        const repeatedChars = /(.)\1{2,}/.test(this.password);
        if (repeatedChars) {
            this.score -= 10;
            this.suggestions.push('Avoid repeated characters');
        }

        // Check for sequential characters
        const sequential = /(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|123|234|345|456|567|678|789|012)/i.test(this.password);
        if (sequential) {
            this.score -= 10;
            this.suggestions.push('Avoid sequential characters (abc, 123)');
        }

        // Check for keyboard patterns
        const keyboardPatterns = /(qwerty|asdfgh|zxcvbn|123456|654321)/i.test(this.password);
        if (keyboardPatterns) {
            this.score -= 15;
            this.suggestions.push('Avoid keyboard patterns (qwerty, 123456)');
        }
    }

    checkCommonPassword() {
        if (commonPasswords.includes(this.password.toLowerCase())) {
            this.score -= 30;
            this.suggestions.push('Avoid common passwords');
        }
    }

    checkPersonalInfo() {
        const passwordLower = this.password.toLowerCase();
        
        // Check for popular names
        for (const name of popularNames) {
            // Gelişmiş kelime sınırı: başında şifrenin başı veya harf/rakam olmayan karakter, sonunda harf/rakam olmayan karakter veya şifrenin sonu
            const namePattern = new RegExp(`(^|[^a-zA-Z0-9])${name}([^a-zA-Z0-9]|$)`, 'i');
            if (namePattern.test(passwordLower)) {
                this.score -= 20;
                this.suggestions.push('Avoid using common names in your password');
                break;
            }
        }

        // Check for common personal info patterns
        const personalPatterns = [
            /(mom|dad|mother|father|sister|brother|son|daughter)/i,
            /(cat|dog|pet|animal|fish|bird)/i,
            /(home|house|apartment|room|bedroom)/i,
            /(car|truck|vehicle|bike|motorcycle)/i,
            /(job|work|office|company|business)/i,
            /(school|college|university|student|teacher)/i,
            /(city|town|country|state|street)/i,
            /(phone|mobile|cell|number|address)/i
        ];

        for (const pattern of personalPatterns) {
            if (pattern.test(passwordLower)) {
                this.score -= 15;
                this.suggestions.push('Avoid using personal information (family, pets, locations)');
                break;
            }
        }
    }

    checkFamousReferences() {
        const passwordLower = this.password.toLowerCase();
        
        // Check for famous events, movies, games, etc.
        for (const reference of famousEvents) {
            // Gelişmiş kelime sınırı: başında şifrenin başı veya harf/rakam olmayan karakter, sonunda harf/rakam olmayan karakter veya şifrenin sonu
            const wordPattern = new RegExp(`(^|[^a-zA-Z0-9])${reference}([^a-zA-Z0-9]|$)`, 'i');
            if (wordPattern.test(passwordLower)) {
                this.score -= 25;
                this.suggestions.push('Avoid using famous references (movies, games, events, names)');
                break;
            }
        }

        // Check for sports teams and athletes
        const sportsPatterns = [
            /(lakers|warriors|celtics|bulls|heat|knicks|nets|clippers|suns|mavericks)/i,
            /(yankees|redsox|dodgers|giants|cardinals|cubs|braves|mets|phillies|astros)/i,
            /(cowboys|patriots|packers|steelers|49ers|chiefs|bills|ravens|saints|bucs)/i,
            /(lebron|jordan|kobe|curry|durant|giannis|jokic|embiid|doncic|zion)/i,
            /(messi|ronaldo|neymar|mbappe|haaland|benzema|lewandowski|salah|mane|kane)/i,
            /(federer|nadal|djokovic|serena|venus|osaka|barty|swiatek|sabalenka|rybakina)/i,
            /(tiger|woods|mickelson|mcilroy|spieth|thomas|koepka|dechambeau|morikawa|scheffler)/i
        ];

        for (const pattern of sportsPatterns) {
            if (pattern.test(passwordLower)) {
                this.score -= 20;
                this.suggestions.push('Avoid using sports references (teams, athletes)');
                break;
            }
        }
    }

    checkDatePatterns() {
        const passwordLower = this.password.toLowerCase();
        
        // Check for common date patterns (1970-2015)
        const yearPattern = /(19[7-9][0-9]|20[0-1][0-5])/;
        if (yearPattern.test(this.password)) {
            this.score -= 20;
            this.suggestions.push('Avoid using birth years or common dates (1970-2015)');
        }

        // Check for month/day patterns
        const datePatterns = [
            /(january|february|march|april|may|june|july|august|september|october|november|december)/i,
            /(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
            /(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i,
            /(mon|tue|wed|thu|fri|sat|sun)/i
        ];

        for (const pattern of datePatterns) {
            if (pattern.test(passwordLower)) {
                this.score -= 15;
                this.suggestions.push('Avoid using date-related words (months, days)');
                break;
            }
        }

        // Check for common date formats
        const dateFormats = [
            /(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])/, // MM/DD
            /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])/, // DD/MM
            /(19[7-9][0-9]|20[0-1][0-5])(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])/, // YYYYMMDD
            /(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])(19[7-9][0-9]|20[0-1][0-5])/  // DDMMYYYY
        ];

        for (const format of dateFormats) {
            if (format.test(this.password)) {
                this.score -= 25;
                this.suggestions.push('Avoid using date formats (birth dates, anniversaries)');
                break;
            }
        }
    }

    calculateFinalScore() {
        // Ensure score is between 0 and 100
        this.score = Math.max(0, Math.min(100, this.score));
        
        // Determine strength level
        if (this.score >= 90) {
            this.strength = 'very-strong';
        } else if (this.score >= 70) {
            this.strength = 'strong';
        } else if (this.score >= 50) {
            this.strength = 'medium';
        } else if (this.score >= 30) {
            this.strength = 'weak';
        } else {
            this.strength = 'very-weak';
        }
    }

    getResult() {
        return {
            score: this.score,
            strength: this.strength,
            suggestions: this.suggestions,
            password: this.password
        };
    }
}

// Security calculator
class SecurityCalculator {
    calculateCombinations(password) {
        let charset = 0;
        
        if (/[a-z]/.test(password)) charset += 26;
        if (/[A-Z]/.test(password)) charset += 26;
        if (/\d/.test(password)) charset += 10;
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) charset += 32;
        
        return Math.pow(charset, password.length);
    }

    calculateCrackTime(combinations) {
        // Assuming 1 billion attempts per second
        const attemptsPerSecond = 1000000000;
        const seconds = combinations / attemptsPerSecond;
        
        if (seconds < 1) return 'Instantly';
        if (seconds < 60) return `${Math.round(seconds)} seconds`;
        if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
        if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
        if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
        if (seconds < 31536000000) return `${Math.round(seconds / 31536000)} years`;
        return `${Math.round(seconds / 31536000000)} billion years`;
    }

    getRiskLevel(score) {
        if (score >= 80) return 'Very Low';
        if (score >= 60) return 'Low';
        if (score >= 40) return 'Medium';
        if (score >= 20) return 'High';
        return 'Very High';
    }
}

// UI Manager
class UIManager {
    constructor() {
        this.analyzer = new PasswordStrengthAnalyzer();
        this.calculator = new SecurityCalculator();
        this.setupEventListeners();
    }

    setupEventListeners() {
        passwordInput.addEventListener('input', () => this.updateAnalysis());
        togglePassword.addEventListener('click', () => this.togglePasswordVisibility());
    }

    updateAnalysis() {
        const password = passwordInput.value;
        const result = this.analyzer.analyze(password);
        
        this.updateStrengthMeter(result);
        this.updateCriteria(password);
        this.updateSuggestions(result.suggestions);
        this.updateSecurityInfo(password, result.score);
    }

    updateStrengthMeter(result) {
        const { score, strength } = result;
        
        // Update strength bar
        strengthFill.style.width = `${score}%`;
        
        // Update strength text
        const strengthLabels = {
            'very-weak': 'Very Weak',
            'weak': 'Weak',
            'medium': 'Medium',
            'strong': 'Strong',
            'very-strong': 'Very Strong'
        };
        
        strengthText.textContent = strengthLabels[strength];
        
        // Update score circle
        scoreText.textContent = score;
        
        // Update classes for styling
        document.querySelector('.strength-meter').className = `strength-meter strength-${strength}`;
        scoreCircle.className = `score-circle score-${strength}`;
    }

    updateCriteria(password) {
        const criteria = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /\d/.test(password),
            special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
            noCommon: !commonPasswords.includes(password.toLowerCase())
        };

        lengthCriterion.className = `criterion ${criteria.length ? 'valid' : 'invalid'}`;
        uppercaseCriterion.className = `criterion ${criteria.uppercase ? 'valid' : 'invalid'}`;
        lowercaseCriterion.className = `criterion ${criteria.lowercase ? 'valid' : 'invalid'}`;
        numberCriterion.className = `criterion ${criteria.number ? 'valid' : 'invalid'}`;
        specialCriterion.className = `criterion ${criteria.special ? 'valid' : 'invalid'}`;
        noCommonCriterion.className = `criterion ${criteria.noCommon ? 'valid' : 'invalid'}`;
    }

    updateSuggestions(suggestions) {
        suggestionsList.innerHTML = '';
        
        if (suggestions.length === 0) {
            suggestionsList.innerHTML = `
                <div class="suggestion perfect-password">
                    <i class="fas fa-check-circle"></i>
                    <span>Perfect! Your password looks strong.</span>
                </div>
            `;
        } else {
            // Remove duplicates and limit to 8 suggestions for better UX
            const uniqueSuggestions = [...new Set(suggestions)].slice(0, 8);
            
            uniqueSuggestions.forEach(suggestion => {
                const suggestionElement = document.createElement('div');
                suggestionElement.className = 'suggestion';
                suggestionElement.innerHTML = `
                    <i class="fas fa-lightbulb"></i>
                    <span>${suggestion}</span>
                `;
                suggestionsList.appendChild(suggestionElement);
            });
        }
    }

    updateSecurityInfo(password, score) {
        if (!password) {
            crackTime.textContent = '-';
            combinations.textContent = '-';
            riskLevel.textContent = '-';
            return;
        }

        const combinationsCount = this.calculator.calculateCombinations(password);
        const crackTimeResult = this.calculator.calculateCrackTime(combinationsCount);
        const riskLevelResult = this.calculator.getRiskLevel(score);

        crackTime.textContent = crackTimeResult;
        combinations.textContent = this.formatNumber(combinationsCount);
        riskLevel.textContent = riskLevelResult;
    }

    formatNumber(num) {
        if (num >= 1e12) return `${(num / 1e12).toFixed(1)}T`;
        if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`;
        if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
        if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
        return num.toString();
    }

    togglePasswordVisibility() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        
        const icon = togglePassword.querySelector('i');
        icon.className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new UIManager();
}); 