# Research


## Auth Research

### Links:
[Jwt auth example frontend](https://github.com/gitdagray/redux_jwt_auth)
[Jwt auth example backend](https://github.com/gitdagray/nodejs_jwt_auth)
[Nextjs cookie proxy api example](https://github.com/lauslim12/Asuna)
[Cookies in nextjs video](https://www.youtube.com/watch?v=w8n7Soz7khw)
[Refreshtoken rotating explanation](https://www.youtube.com/watch?v=s-4k5TcGKHg)
[React role based auth](https://www.youtube.com/watch?v=oUZjO00NkhY)
[React persistent auth example](https://www.youtube.com/watch?v=27KeYk-5vJw)  [<--repo](https://github.com/gitdagray/react_persist_login)

### Notes
Er moet een oplossing worden gevonden voor het feit dat de authapi en nextjs frontend ergens anders gehost worden maar er wel cookies gebruikt worden. De auth token moet worden opgeslag op de client in bijvoorbeeld een globalstate, terwijl de refreshtoken in een cookie wordt opgeslagen. Deze cookie moet httponly zijn. De accesstoken moet een korte expiration hebben en de refreshtoken een wat langere. Bij een request wordt de accesstoken meegestuurd in een header, als deze invalid is moet er een refresh request gemaakt worden. De refreshtoken moeten ook ergens op de server worden opgeslagen zodat deze kunnen worden gecheckt en bij het uitloggen ook invalid gemaakt kunnen worden. In de accestoken moeten ook de user roles en id worden opgeslagen. 
Een custom hook maken genaamd useAuth die het gebruiken van de token enzo makkelijk maakt.

Verder uitzoeken:
- Csrf protection
- Email service kiezen
- Beste manier om refreshtokens opteslaan
- Auth flow chart maken
- user roles bedenken
- Database provider zoeken
- Database design


