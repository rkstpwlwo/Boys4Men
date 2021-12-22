const mysql=require('mysql');

const connection=mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'rin1991',
  database: 'project1'
});


// Genre 테이블 insert
const genre=[
  ['Punk','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Punk.png','Punk는 1970년대 중반 영미권을 중심으로 탄생한 록의 한 장르로, 기존의 록에 대한 반발로 시작되었다.\n스투지스(The Stooges), 엠시 파이브(MC 5) 등 ‘거친 입자’를 특징으로 하는 거라지 록으로부터 음악적으로 큰 영향을 받았다.\n스리 코드와 ‘Do It Yourself!’ 정신을 바탕으로 “아마추어라도 연주할 수 있다”는 문제의식을 환기했다.\n라몬스(The Ramones)가 토대를 닦았으며, 클래시(The Clash)에 의해 사운드가 풍요로워졌다.'],
  ['Jazz','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Jazz.png','Jazz는 미국 흑인의 민속음악과 백인의 유럽음악의 결합으로 미국에서 생겨난 음악장르이다.\n리듬·프레이징·사운드·블루스 하모니는 아프리카의 감각과 미국 흑인 특유의 음악감각에서 나오고, 사용되는 악기·멜로디·하모니는 유럽의 전통적인 수법을 따르고 있다.\n오프 비트의 리듬에서 나온 스윙감, 임프로비제이션(즉흥연주)에 나타난 창조성과 활력, 연주자의 개성을 많이 살린 사운드와 프레이징의 3가지를 들 수 있으며 이것들이 유럽음악·클래식음악과 근본적으로 다른 점이라고 할 수 있다.'],
  ['Alternative Rock','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/AlternativeRock.png','Alternative Rock은 장대한 콘셉트를 앞세우는 클래식 록(Classic Rock)이나 메인스트림 록의 ‘대안’으로 시작된 록 음악을 지칭한다.\nAlternative Rock밴드들은 1980년대 자생적인 언더그라운드 신(Scene)을 조직해 왕성한 활동이 있었고, 1990년대 초반에 큰 인기를 끌었다.\nAlternative Rock이라는 용어는 1980년대 차트를 차지하고 있던 ‘헤비메탈 음악’으로부터 영향받지 않은 록 음악을 지칭하기 위해 쓰였다고 전해지며, 이후 록 저널들이 본격적으로 사용하면서 세간에 보편화되었다.'],
  ['Reggae','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Reggae.png','Reggae는 1968~1969년 자메이카에서 발생한 새로운 대중음악장르이다.\n전통적인 흑인 댄스뮤직에 미국의 soul music 등의 요소가 곁들여 형성되었다.\n런던에는 자메이카 이민이 증가하여 1970년대 후반부터 영국을 본거지로 한 레게음악가도 잇달아 나타났다.\n1980년대로 접어들자 토스트(toast) 또는 DJ라고 불리는 보컬형, 그리고 러버즈 록(lovers rock)이라 일컫는 러브 발라드적인 것 등 레게는 다양화하여 세계의 대중음악에 폭넓은 영향을 끼쳤다.'],
  ['New Age','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Newage.png','New Age는 고전음악이나 포크 음악 등 여러 장르의 음악을 고루 융합시킨 음악을 지칭한다.\n무드음악, 또는 환경음악, 더 나아가 듣기에도 부담 없고 청소년들의 정서에도 해가 되지 않는다는 점에서 무공해 음악이라고까지 부른다.\n오늘날 대중음악의 주종을 이루고 있는 감각적인 록(rock) 음악에 반감을 느낀 음악가들이 동양의 신비적이고 즉흥적인 음악에 매료되어 그러한 동양적 신비감과 정적인 분위기를 주로 고전음악이나 포크음악에 사용되는 어쿠스틱 악기나 신디사이저와 같은 최첨단 전자악기를 이용해 동서양의 교감을 실현하고자 노력한 것에서 비롯되었다.'],
  ['Pop','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Pop.png','Pop은 ‘인기 있는’ 또는 ‘대중적인’을 뜻하는 ‘popular’에서 장르 이름을 가져왔다.\n현대 대중음악의 가장 기본이 되는 장르로 대중의 귀를 쉽게 잡아 끌 수 있는 쉬운 멜로디와 리듬을 가진 곡을 가리킨다.\n대략 4분 이내의 짧은 재생 시간을 갖고 있으며 보편적으로 절-후렴 형태로 이루어져 있다.\n부담 없는 리듬과 듣는 이를 한 번에 사로잡을 수 있는 멜로디와 후렴을 지향한다.\n가사 역시도 남녀의 사랑 이야기나 인생에 관한 이야기가 많다.'],
  ['Metal','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Metal.png','Metal은 하드 록이 강성화된 형태로, 강력한 디스토션과 비트를 특징으로 하며 대개 밴드 포맷으로 연주되는 음악을 가리킨다.\n볼륨을 키운 왜곡된 사운드의 전기기타 연주, 격렬한 드럼, 고음을 내지르거나 낮은 음으로 으르렁거리는 듯한 소리를 내는 보컬 등을 특징으로 한다.\n현재 메인스트림 차트에 모습을 비추는 경우는 드물지만 헤비메탈은 포스트 록, 재즈, 프로그레시브 등 다양한 장르와 교류하며 록의 갈래 중에서도 가장 복잡한 형태의 음악으로 진화하고 있다.'],
  ['Hiphop','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Hiphop.png','Hiphop은 1980년대 미국에서부터 유행하기 시작한 다이내믹한 춤과 음악의장르이다.\n초기에는 1970년대 후반 뉴욕 할렘가에 거주하는 흑인이나 스페인계 청소년들에 의해 형성된 새로운 문화 전반을 가리키는 말이었다.\n파티나 클럽에서 DJ가 음악을 틀고 음악에 맞춰 춤을 추거나 랩을하는 문화가 Hiphop이란 장르로 굳어졌다.\nHiphop을 이루는 요소로는 주로 네 가지, 랩·디제잉·그라피티·브레이크댄스가 거론된다.\n1990년대에 들어서면서 미국에서 시작된 Hiphop은 전세계의 신세대들을 중심으로 보다 자유스럽고 즉흥적인 형태의 패션·음악·댄스·노래, 나아가 의식까지도 지배하는 문화 현상이 되었다.'],
  ['Electronica','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Electronica.png','Electronica는 전자음악의 다양한 장르를 포괄하는 용어이자 장르이다.\n1990년대 들어서 생겨난 브로큰 비트(broken beat), 다운템포(downtempo), 인텔리전트 댄스 뮤직(intelligent dance music), 빅비트(big beat), 트립합(trip hop) 등 전자음악의 많은 하위 장르들을 포괄하는 의미로 사용된다.\n일렉트로닉 댄스 뮤직(electronic dance music)과 마찬가지로 많은 하위 장르를 두고 있지만 일렉트로니카는 춤추기에 좋은 전자음악뿐만 아니라 감상을 목적으로 만들어진 전자음악도 함께 아우른다.'],
  ['Blues','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/Blues.png','Blues는 17세기부터 미국으로 끌려와 남부지방, 특히 미시시피 델타의 목화밭에서 노동하던 아프리카 흑인들이 아프리카 음악 전통을 유럽의 음악과 접목해 19세기말 탄생한 음악장르이다.\n거의 모든 대중음악의 뿌리가 되는 음악장르이기도 하며 아프리카 전통 음악과 노동요, 유럽에서 넘어온 백인들의 포크 음악에 뿌리를 두고 있다.\n블루스 스케일의 코드 진행과 12마디 형식, 부르고 응답하기(Call and Response)가 음악적 핵심이다.'],
  ['R&B','https://project-genre-image.s3.ap-northeast-2.amazonaws.com/R&b.png','R&B는 1940년대에 생겨난 대중음악의 한 장르이다.\nR&B는 Rhythm & Blues의 약칭으로 블루스를 바탕으로 한 화성과 전기기타 등을 활용한 경쾌한 리듬을 결합한 것이 특징이다.\n기존의 블루스가 신에 대한 축복과 고단한 삶에 대한 이야기가 주를 이루었다면 R&B는 남녀 간의 통속적인 이야기도 자주 다루었다.\n그루브가 강조된 연주에 보컬과 연주 모두 자율성이 강하다.']
]

connection.query('insert into Genre(name,img,description) values ?',[genre],function(err,result){
  if(err){
    console.log(err);
  }
  else{
    console.log('genre success');
  }
})


//Gerre_Mbti테이블 insert
const genre_mbti={
  ENFJ:[2,10],
  ENFP:[4,5,9],
  ENTJ:[2,9],
  ENTP:[3,8,9],
  ESFJ:[10,11],
  ESFP:[5,6,8],
  ESTJ:[6,8],
  ESTP:[4,7],
  INFJ:[3,1],
  INFP:[1,3],
  INTJ:[7,3],
  INTP:[1,7],
  ISFJ:[5,10],
  ISFP:[4,5,6],
  ISTJ:[6,11],
  ISTP:[1,7],
}

for(const key of Object.keys(genre_mbti)){
  for(const genreId of genre_mbti[key]){
    connection.query(`insert into Genre_Mbti(genreId,mbti) values (${genreId},'${key}')`,function(err,result){
      if(err){
        console.log(err);
      }
    })
  }
}
console.log('Genre_Mbti success');

//song테이블 insert
const song=[
  [1,'The Clash','London Calling'],
  [1,'Green Day','Basket Case'],
  [1,'Talking Heads','Psycho Killer'],
  [1,'The Offspring','Self Esteem'],
  [1,'Blondie','One Way Or Another'],
  [2,'Tony Bennett & Lady Gaga','I Get A Kick Out Of You'],
  [2,'Pasquale Grasso','In a Sentimental Mood'],
  [2,'Lady Blackbird','It’ll Never Happen Again'],
  [2,'Jon Batiste','Bigger Than Us'],
  [2,'BADBADNOTGOOD','Beside April(feat.Arthur Verocai)'],
  [3,'Big Thief','No Reason'],
  [3,'Best Coast','Leading'],
  [3,'Brandon Boyd','Petrichor'],
  [3,'Mitski','Heat Lightning'],
  [3,'Khruangbin & Leon Bridges','B-Side'],
  [4,'D\'Yani','Made for This'],
  [4,'Quada','Read'],
  [4,'Minister Marion Hall','If I Was Famous'],
  [4,'Tomorrow People','Lose Track of Time'],
  [4,'Wayne Wonder & Mr. G','Tuff Times'],
  [5,'George Winston','Thanksgiving'],
  [5,'Pat Metheny','And I Love Her'],
  [5,'George Winston','Joy'],
  [5,'The Silent Ocean','Floating, Dreaming'],
  [5,'Vangelis','Nocturnal Promenade'],
  [6,'24kGoldn','More Than Friends'],
  [6,'Aaliyah & The Weeknd','Poison'],
  [6,'Jewel','Firework'],
  [6,'Big Time Rush','Call It Like I See It'],
  [6,'Hayd','What Did I Do?'],
  [7,'Behemoth','Conquer All'], 
  [7,'Behemoth','O Father O Satan O Sun!'],
  [7,'Shadow of Intent','Of Fury'],
  [7,'Arch Enemy','House of Mirrors'],
  [7,'The Amity Affliction','Death is All Around'],
  [8,'EST Gee','Dead Wrong (feat. Future)'],
  [8,'SAINt JHN','The Best Part of Life'],
  [8,'Preme & PARTYNEXTDOOR','Make a Mall'],
  [8,'Benny the Butcher','Mr. Pyrex Man'],
  [8,'Joyner Lucas','My Escape'],
  [9,'Jacques Greene','Leave Here'],
  [9,'Sworn Virgins','The Male Man'],
  [9,'Huerco S.','Plonk VI'],
  [9,'Marcel Dettmann, Johnny Klimek & Tom Tykwer','My Dream Ended Here'],
  [9,'TNGHT, Hudson Mohawke & Lunice','Brick Figures'],
  [10,'Eric Gales','You Don’t Know The Blue'],
  [10,'Fantastic Negrito','When Everything Went Wrong'],
  [10,'Gabriels','Bloodline'],
  [10,'Leyla McCalla','Fort Dimanche'],
  [10,'Eric Krasno','Leave Me Alone'],
  [11,'지소울','Natural'],
  [11,"Bruno Mars, Anderson.Paak & Silk Sonic",'Smokin Out The Window'],
  [11,'뎁트','Christmas Gift (feat.Ashley Alisha & Sonny Zero)'],
  [11,'Masego & Devin Morrison','Yamz'],
  [11,'WEN','서툰']
]

connection.query('insert into Song (genreId,artist,name) values ?',[song],function(err,result){
  if(err){
    console.log(err);
  }
  else{
    console.log('Song success');
  }
})

connection.end();