import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function aboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        margin: 2,
        marginBottom: 10,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            maxWidth: 800,
            padding: 5,
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            Quelque mots du fondateur :
          </Typography>
          <Typography
            sx={{
              maxWidth: 800,
              padding: 5,
            }}
          >
            "Bienvenue dans notre oFasis de lumière et de créativité, où chaque
            bougie raconte une histoire et chaque flamme danse avec grâce. Notre
            site est un sanctuaire pour les amateurs de bougies, les passionnés
            de parfums et les collectionneurs d'émotions. Que vous soyez à la
            recherche d'une lueur apaisante pour éclairer vos soirées, d'un
            parfum envoûtant pour embaumer votre maison ou d'une pièce unique
            pour compléter votre collection, vous êtes au bon endroit. Plongez
            dans notre univers et laissez-vous transporter par une palette
            infinie de couleurs, de formes et de fragrances. Explorez nos
            collections soigneusement sélectionnées, où chaque bougie est le
            fruit d'un savoir-faire artisanal et d'une passion inégalée. Des
            bougies classiques aux lignes épurées aux créations audacieuses et
            contemporaines, notre assortiment saura satisfaire tous les goûts et
            toutes les envies. Nous croyons fermement que chaque bougie est bien
            plus qu'une simple source de lumière. Elle est le reflet de votre
            style, de votre humeur et de vos souvenirs. C'est pourquoi nous nous
            engageons à vous offrir des produits d'une qualité exceptionnelle,
            conçus pour éveiller vos sens et enrichir votre quotidien. Que vous
            soyez un amateur passionné ou un collectionneur chevronné, nous
            sommes ravis de vous accueillir dans notre communauté. Explorez,
            découvrez et laissez-vous inspirer par l'art captivant de la bougie.
            Bienvenue dans notre monde, où chaque bougie est une histoire à
            raconter, un rêve à partager et une expérience à vivre pleinement."
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
