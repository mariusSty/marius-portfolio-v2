import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Playlist Game — Politique de confidentialité",
  description:
    "Politique de confidentialité de l'application mobile Playlist Game.",
};

export default function PlaylistGamePrivacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au portfolio
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Politique de confidentialité
        </h1>
        <p className="text-muted-foreground mb-1 text-lg">Playlist Game</p>
        <p className="text-muted-foreground text-sm mb-10">
          Dernière mise à jour : 4 mars 2026
        </p>

        <div className="prose-custom space-y-8">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Playlist Game est une application mobile de jeu multijoueur en
              temps réel développée par Marius Stephany (ci-après « nous »,
              « notre » ou « l&apos;éditeur »). Cette politique de
              confidentialité explique comment nous collectons, utilisons et
              protégeons vos informations lorsque vous utilisez notre
              application.
            </p>
            <p>
              En utilisant Playlist Game, vous acceptez les pratiques décrites
              dans cette politique.
            </p>
          </section>

          <section>
            <h2>2. Données collectées</h2>
            <p>
              Playlist Game est conçue pour minimiser la collecte de données
              personnelles. Nous ne vous demandons pas de créer un compte, nous
              ne collectons ni adresse e-mail, ni mot de passe, ni aucune
              information d&apos;identité civile.
            </p>

            <h3>2.1 Identifiant unique (UUID)</h3>
            <p>
              Au premier lancement, un identifiant unique anonyme (UUID) est
              généré automatiquement et stocké localement sur votre appareil via{" "}
              <strong>Expo SecureStore</strong>. Cet identifiant permet de vous
              reconnaître lors des parties sans nécessiter de compte utilisateur.
              Il n&apos;est pas lié à votre identité réelle.
            </p>

            <h3>2.2 Pseudo</h3>
            <p>
              Vous choisissez un pseudo librement. Ce pseudo est stocké
              localement sur votre appareil et transmis au serveur de jeu
              uniquement pour l&apos;affichage dans les salons de jeu. Nous vous
              recommandons de ne pas utiliser votre vrai nom.
            </p>

            <h3>2.3 Données de jeu</h3>
            <p>
              Pendant une partie, les données suivantes sont transmises à notre
              serveur :
            </p>
            <ul>
              <li>
                Votre <strong>UUID</strong> et <strong>pseudo</strong>
              </li>
              <li>
                Le <strong>salon de jeu</strong> (code PIN) que vous rejoignez
              </li>
              <li>
                Vos <strong>choix de chansons</strong> (référence Deezer)
              </li>
              <li>
                Vos <strong>votes</strong> (deviner quel joueur a choisi quelle
                chanson)
              </li>
            </ul>
            <p>
              Ces données sont temporaires et liées à la session de jeu en
              cours. Elles ne sont pas utilisées à des fins de profilage ou de
              marketing.
            </p>

            <h3>2.4 Préférence de langue</h3>
            <p>
              L&apos;application détecte automatiquement la langue de votre
              appareil (français ou anglais) afin d&apos;afficher
              l&apos;interface dans la langue appropriée. Cette information
              n&apos;est pas transmise à nos serveurs.
            </p>
          </section>

          <section>
            <h2>3. Services tiers</h2>
            <p>
              L&apos;application fait appel aux services tiers suivants :
            </p>

            <h3>3.1 Deezer</h3>
            <p>
              Lorsque vous recherchez une chanson, votre requête de recherche
              est envoyée à l&apos;API Deezer pour afficher les résultats et
              lire des extraits audio de 30 secondes. Nous ne transmettons
              aucune donnée personnelle à Deezer en dehors de votre requête de
              recherche. Consultez la{" "}
              <a
                href="https://www.deezer.com/legal/personal-datas"
                target="_blank"
                rel="noopener noreferrer"
              >
                politique de confidentialité de Deezer
              </a>{" "}
              pour plus d&apos;informations.
            </p>

            <h3>3.2 DiceBear</h3>
            <p>
              Les avatars des joueurs sont générés via l&apos;API{" "}
              <a
                href="https://www.dicebear.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DiceBear
              </a>{" "}
              à partir de votre pseudo. Aucune autre donnée personnelle
              n&apos;est transmise à ce service.
            </p>

            <h3>3.3 Expo (EAS Update)</h3>
            <p>
              L&apos;application utilise le service Expo EAS Update pour
              recevoir des mises à jour over-the-air. Ce service peut collecter
              des métadonnées techniques (version de l&apos;app, plateforme).
              Consultez la{" "}
              <a
                href="https://expo.dev/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                politique de confidentialité d&apos;Expo
              </a>{" "}
              pour plus d&apos;informations.
            </p>
          </section>

          <section>
            <h2>4. Stockage des données</h2>
            <p>
              Les données stockées localement sur votre appareil (UUID et
              pseudo) utilisent <strong>Expo SecureStore</strong>, qui s&apos;appuie
              sur le Keychain (iOS) et le Keystore (Android) pour un stockage
              sécurisé et chiffré.
            </p>
            <p>
              Les données de jeu côté serveur (salons, parties, votes) sont
              stockées temporairement pendant la durée des parties et ne sont
              pas conservées à long terme après la fin des sessions de jeu.
            </p>
          </section>

          <section>
            <h2>5. Partage des données</h2>
            <p>
              Nous ne vendons, ne louons et ne partageons vos données
              personnelles avec aucun tiers à des fins commerciales ou
              publicitaires. Les seules données partagées sont :
            </p>
            <ul>
              <li>
                Votre <strong>pseudo</strong> et votre <strong>avatar</strong>,
                visibles par les autres joueurs dans un salon de jeu
              </li>
              <li>
                Vos <strong>choix de chansons</strong> et{" "}
                <strong>votes</strong>, partagés avec les autres joueurs dans le
                cadre du jeu
              </li>
            </ul>
          </section>

          <section>
            <h2>6. Données des enfants</h2>
            <p>
              Playlist Game n&apos;est pas destinée aux enfants de moins de 13
              ans. Nous ne collectons pas sciemment de données auprès
              d&apos;enfants de moins de 13 ans. Si vous êtes un parent ou un
              tuteur et que vous pensez que votre enfant nous a fourni des
              informations, veuillez nous contacter pour que nous puissions
              supprimer ces données.
            </p>
          </section>

          <section>
            <h2>7. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité raisonnables pour
              protéger vos données, notamment :
            </p>
            <ul>
              <li>
                Stockage local chiffré via <strong>SecureStore</strong>
              </li>
              <li>
                Communication chiffrée entre l&apos;application et le serveur
              </li>
              <li>Minimisation des données collectées</li>
            </ul>
          </section>

          <section>
            <h2>8. Vos droits</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD) et aux lois applicables, vous disposez des droits suivants
              :
            </p>
            <ul>
              <li>
                <strong>Droit d&apos;accès</strong> : vous pouvez demander
                quelles données nous détenons à votre sujet
              </li>
              <li>
                <strong>Droit de suppression</strong> : vous pouvez demander la
                suppression de vos données en nous contactant
              </li>
              <li>
                <strong>Droit à la portabilité</strong> : vous pouvez demander
                une copie de vos données dans un format structuré
              </li>
              <li>
                <strong>Suppression locale</strong> : vous pouvez supprimer
                toutes les données locales en désinstallant l&apos;application
              </li>
            </ul>
          </section>

          <section>
            <h2>9. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. En cas de modification
              substantielle, une notification sera affichée dans
              l&apos;application. La date de dernière mise à jour en haut de
              cette page indique la version en vigueur.
            </p>
          </section>

          <section>
            <h2>10. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité
              ou pour exercer vos droits, vous pouvez nous contacter à
              l&apos;adresse suivante :
            </p>
            <p>
              <a href="mailto:marius.stephany@gmail.com">
                marius.stephany@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Marius Stephany — Playlist Game
        </div>
      </footer>
    </div>
  );
}
