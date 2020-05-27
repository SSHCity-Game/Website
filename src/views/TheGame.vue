<template>
  <section>
    <Navigation/>
    <section class="section has-background-light">
      <div class="container top-padding">
        <h1 class="title is-size-1">Le jeu</h1>
        <div class="container">
          <h4 class="title is-size-4">Présentation</h4>
          <p>SSHCity est un jeu de type “City Builder”. Le joueur est donc propriétaire d’une ville
            et son but est de la développer le plus possible. Cependant son rôle ne se cantonne pas
            à celui d’un investisseur comptable. Il doit veiller à la sécurité de ses habitant et
            les secourir quand ils sont en difficulté. On retrouve ici l’origine du groupe SAFExTY
            qui était de secourir autrui. Pour cela le joueur a la possibilité de construire
            différents bâtiments qui lui permettront de résoudre différents incidents. Il existe
            quatre types d’incidents : les incendies, les noyades, les accidents de voitures et les
            cambriolages. Pour résoudre ces problèmes le joueur devra dépêcher sur les lieux du
            problème certains types de véhicules transportant les secours. Ainsi il devra apporter
            un camion de pompier pour les incendies, une ambulance pour les accidents de voitures,
            un hélicoptère pour les noyades et une voiture de police pour les cambriolages. Résoudre
            ce problème prendra beaucoup d’attention au joueur qui ne devra pas oublier qu’il doit
            aussi faire grandir sa ville en achetant de nouveau bâtiment et en veillant à augmenter
            le nombre d’habitant, tout en gérant l’eau et l’électricité de sa ville. </p>
        </div>
        <Hero/>
        <div class="container top-padding">
          <h4 class="title is-size-4">Historique</h4>
          <h5 class="title is-size-5">Soutenance 1</h5>
          <p>Notre projet commença avec un peu de retard. En effet, notre premier cahier des charges
            présentait un projet jugé peu intéressant du point de vue des objectifs pédagogiques du
            projet, nous avons dû réfléchir à un nouveau projet. Il s’agit du jeu vidéo que nous
            vous présentons aujourd’hui. Lors de cette soutenance, nous avions présenté le jeu avec
            un avancement moyen de 13%. De fait, le jeu n’en était pas vraiment un puisqu’il
            consistait simplement en la génération d’une map avec des lacs, des montagnes et un
            village relié par deux routes. La mise en place rapide du git nous a permis d’avoir une
            organisation optimale.</p>

          <h5 class="title is-size-5 top-padding">Soutenance 2</h5>
          <p>Lors de cette seconde soutenance, nous vous présentions un jeu dont l’avancement était
            estimé à environ 63%. Légèrement supérieur à la prévision initiale, mais inférieur à la
            prévision de la soutenance une. La plupart des parties avaient globalement avancé comme
            prévu. Cependant, les quelques retards qui pouvaient exister ont été compensés par un
            travail plus important que prévu dans certaines parties. </p>
        </div>
      </div>
    </section>
    <Footer/>
  </section>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Hero from '../components/Hero.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Infos',
  components: {
    Footer,
    Hero,
    Navigation,
  },
};
</script>

<style scoped>
  .top-padding {
    padding-top: 1em;
  }
</style>
