<template>
  <body>
    <div class="title-card mb-4">
      <h1>Documentation</h1>
    </div>
    <div class="container row">
      <div class="container col-md-9 col-sm-9 ">
        <h3 id="introduction">Introduction</h3>
        <p>
          Welcome to motwAPI, a Monster of the Week API. This documentation will
          show you how to make HTTP requests to the resources hosted here, as
          well as how to understand them.
        </p>
        <h3 id="information">Information</h3>
        <p>
          This is a <strong>read-only API</strong>, meaning that only GET
          requests are available on the resources here. No authentication is
          required to access this API, which means that anybody can make calls
          without having to use specific credentials or pass any specific
          parameters.
        </p>
        <h3 id="resources">Resources</h3>
        <p>
          Making a call to the API without any associated resources or path will
          deliver a list of current resources provided.
        </p>
        <h4>GET /api/v1</h4>
        <table class="table">
          <thead>
            <tr>
              <th style="text-align:left">Name</th>
              <th style="text-align:left">Description</th>
              <th style="text-align:left">Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:left">name</td>
              <td style="text-align:left">
                The name of the referenced resource
              </td>
              <td style="text-align:left">string</td>
            </tr>
            <tr>
              <td style="text-align:left">url</td>
              <td style="text-align:left">A url of the referenced resource</td>
              <td style="text-align:left">string</td>
            </tr>
          </tbody>
        </table>
        <h3 id="resource-lists">Resource Lists</h3>
        <p>
          Making a call to any API endpoint without a resource index will return
          a list of available resources for that API.
        </p>
        <h4 id="get-api-v1-playbooks">GET /api/v1/playbooks</h4>
        <!-- <div class="codebox">
          {
            "count": 12,
            "results": [
              {
                "index": "chosen",
                "name": "The Chosen",
                "url": "http://motwapi.com/api/v1/chosen"
              },
              {
                "index": "crooked",
                "name": "The Crooked",
                "url": "http://motwapi.com/api/v1/crooked"
              },
              {
                "index": "divine",
                "name": "The Divine",
                "url": "http://motwapi.com/api/v1/divine"
              },
              {
                "index": "expert",
                "name": "The Expert",
                "url": "http://motwapi.com/api/v1/expert"
              },
              {
                "index": "flake",
                "name": "The Flake",
                "url": "http://motwapi.com/api/v1/flake"
              },
              {
                "index": "initiate",
                "name": "The Initiate",
                "url": "http://motwapi.com/api/v1/initiate"
              },
              {
                "index": "monstrous",
                "name": "The Monstrous",
                "url": "http://motwapi.com/api/v1/monstrous"
              },
              {
                "index": "mundane",
                "name": "The Mundane",
                "url": "http://motwapi.com/api/v1/mundane"
              },
              {
                "index": "professional",
                "name": "The Professional",
                "url": "http://motwapi.com/api/v1/professional"
              },
              {
                "index": "spell-slinger",
                "name": "The Spell-Slinger",
                "url": "http://motwapi.com/api/v1/spell-slinger"
              },
              {
                "index": "spooky",
                "name": "The Spooky",
                "url": "http://motwapi.com/api/v1/spooky"
              },
              {
                "index": "wronged",
                "name": "The Wronged",
                "url": "http://motwapi.com/api/v1/wronged"
              }
            ]
          }
        </div> -->
        <table class="table">
          <thead>
            <tr>
              <th style="text-align:left">Name</th>
              <th style="text-align:left">Description</th>
              <th style="text-align:left">Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:left">count</td>
              <td style="text-align:left">The number of resources delivered</td>
              <td style="text-align:left">number</td>
            </tr>
            <tr>
              <td style="text-align:left">results</td>
              <td style="text-align:left">A list of named API resources</td>
              <td style="text-align:left">array NamedAPIResource</td>
            </tr>
          </tbody>
        </table>
        <h1 id="playbook">Playbook</h1>
        <h4 id="get-api-v1-playbooks-index-">GET /api/v1/playbooks/{index}</h4>
        <!-- <p>CODE BLOCK HERE</p> -->
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>index</td>
              <td>The weapon tag index for shorthand searching</td>
              <td>string</td>
            </tr>
            <tr>
              <td>name</td>
              <td>The name for this weapon tag</td>
              <td>string</td>
            </tr>
            <tr>
              <td>luck_special</td>
              <td>What happens when this playbook uses a luck point</td>
              <td>string</td>
            </tr>
            <tr>
              <td>moves</td>
              <td>
                The moves this playbook can select from at character creation
              </td>
              <td>object Move</td>
            </tr>
            <tr>
              <td>ratings</td>
              <td>
                The ratings sets this playbook can select from at character
                creation
              </td>
              <td>object Rating</td>
            </tr>
            <tr>
              <td>history</td>
              <td>
                The history options the player can select with other
                players&#39; characters
              </td>
              <td>array String</td>
            </tr>
            <tr>
              <td>improvements</td>
              <td>
                The improvements this playbook can select from when they level
                up
              </td>
              <td>array String</td>
            </tr>
            <tr>
              <td>advanced_improvements</td>
              <td>
                The improvements this playbook can select from after leveling up
                5 times
              </td>
              <td>array String</td>
            </tr>
            <tr>
              <td>gear</td>
              <td>The weapons and items this playbook can select from</td>
              <td>object Gear</td>
            </tr>
            <tr>
              <td>look</td>
              <td>The appearance options this playbook can select from</td>
              <td>object Look</td>
            </tr>
          </tbody>
        </table>
        <h3 id="moves">Moves</h3>
        <p>
          Each hunter has a list of moves that they can use at any point. In
          addition to the default seven moves each hunter can use, Playbooks
          also come with special moves they are able to use that are specific to
          that playbook.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>required_move_slots</td>
              <td>The number of required moves for this playbook</td>
              <td>number</td>
            </tr>
            <tr>
              <td>required_moves</td>
              <td>The required moves for this playbook</td>
              <td>array Move</td>
            </tr>
            <tr>
              <td>optional_move_slots</td>
              <td>The number of remaining moves this playbook can pick from</td>
              <td>number</td>
            </tr>
            <tr>
              <td>optional_moves</td>
              <td>The optional moves for this playbook</td>
              <td>array Move</td>
            </tr>
          </tbody>
        </table>
        <h3 id="move">Move</h3>
        <p>
          A move can be used any time the player chooses, so long as the
          requirements are met in fiction for the move to take place.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>The name of the move</td>
              <td>string</td>
            </tr>
            <tr>
              <td>description</td>
              <td>A brief description of what this move does</td>
              <td>string</td>
            </tr>
          </tbody>
        </table>
        <h3 id="gear">Gear</h3>
        <p>
          Gear is the items that each character has. This is usually limited to
          weapons, though some playbooks have additional gear options like
          vehicles or armour. While all playbooks have a gear object that follow
          a similar pattern, the makeup of each playbook&#39;s gear is slightly
          different.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>weapon_slots</td>
              <td>The number of weapons this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>weapons</td>
              <td>The weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
          </tbody>
        </table>
        <h3 id="weapons">Weapons</h3>
        <p>Weapons are used to calculate damage in battle.</p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>The name of the weapon</td>
              <td>string</td>
            </tr>
            <tr>
              <td>harm</td>
              <td>How much harm it inflicts on a successful strike</td>
              <td>number</td>
            </tr>
            <tr>
              <td>tags</td>
              <td>The weapon tags on this item</td>
              <td>array WeaponTag</td>
            </tr>
          </tbody>
        </table>
        <h3 id="look">Look</h3>
        <p>
          A character&#39;s Look describes what they look like. There are a
          variety of factors that decide a look, including the face, clothing,
          and even their aura. Note: Not every character has options for each
          look modifier.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>body</td>
              <td>The options for what their body looks like</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>face</td>
              <td>The options for what their face looks like</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>eyes</td>
              <td>The options for what their eyes look like</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>aura</td>
              <td>The options for what energy their aura gives off</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>clothes</td>
              <td>The options for what clothes they are wearing</td>
              <td>array string</td>
            </tr>
          </tbody>
        </table>
        <h1 id="playbook-specifics">Playbook Specifics</h1>
        <h2 id="the-chosen">The Chosen</h2>
        <h3 id="fate">Fate</h3>
        <p>
          The Chosen&#39;s date describes the destiny the Chosen was fated to
          fulfill.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>how_you_found_out</td>
              <td>How you found out about your destiny</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>heroic_tag_slots</td>
              <td>How many Heroic tags you must select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>heroic_tags</td>
              <td>The options for Heroic tags</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>doom_tag_slots</td>
              <td>How many Doom tags you must select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>doom_tags</td>
              <td>The options for Doom tags</td>
              <td>array string</td>
            </tr>
          </tbody>
        </table>
        <h3 id="gear">Gear</h3>
        <p>
          Instead of regular weapons, the Chosen is able to construct a Special
          Weapon by choosing a weapon form, a business end, and a material it is
          made from. Mechanically these are structured identically to the
          generic playbook weapon object. They are also able to choose a piece
          of armour with 1-armour.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>special_weapon_form_slots</td>
              <td>How many special weapon forms you must select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>special_weapon_forms</td>
              <td>The options for the form of your special weapon</td>
              <td>array Weapon</td>
            </tr>
            <tr>
              <td>special_weapon_business_end_slots</td>
              <td>How many special weapon business-ends you must select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>special_weapon_business_ends</td>
              <td>
                The options for the business-end of your special weapon array
              </td>
              <td>array Weapon</td>
            </tr>
            <tr>
              <td>special_weapon_material_slots</td>
              <td>How many special weapon materials you must select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>special_weapon_materials</td>
              <td>
                The options for the material your special weapon is made of
              </td>
              <td>string</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-crooked">The Crooked</h2>
        <h3 id="heat">Heat</h3>
        <p>
          The Crooked&#39;s Heat trait describes the enemies they made in their
          past.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>heat</td>
              <td>The options for this character&#39;s heat trait</td>
              <td>array string</td>
            </tr>
          </tbody>
        </table>
        <h3 id="underworld">Underworld</h3>
        <p>
          The Underworld trait describes how the Crooked was introduced to the
          world of the supernatural.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>underworld</td>
              <td>The options for this character&#39;s Underworld trait</td>
              <td>array string</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-divine">The Divine</h2>
        <h3 id="mission">Mission</h3>
        <p>The Divine&#39;s Mission is the reason it was sent to Earth.</p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mission</td>
              <td>The options for this character&#39;s Mission trait</td>
              <td>array string</td>
            </tr>
          </tbody>
        </table>
        <h3 id="gear">Gear</h3>
        <p>
          Instead of regular weapons, the Divine is able to pick from a list of
          divine weapons. Mechanically these are structured identically to the
          generic playbook weapon object.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mission</td>
              <td>The options for this character&#39;s Mission trait</td>
              <td>array string</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-expert">The Expert</h2>
        <h3 id="haven">Haven</h3>
        <p>
          The Haven is a location the Expert can use to safely work. They have
          options on what rooms their Haven has.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>haven</td>
              <td>The options available for the Expert&#39;s Haven</td>
              <td>array Room</td>
            </tr>
          </tbody>
        </table>
        <h3 id="room">Room</h3>
        <p>
          Each Haven is made up of at least three rooms, each of which serve a
          distinct purpose, narratively and mechanically.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>The name of the room</td>
              <td>string</td>
            </tr>
            <tr>
              <td>description</td>
              <td>The purpose of the room, including mechanical benefits</td>
              <td>string</td>
            </tr>
          </tbody>
        </table>
        <h3 id="gear">Gear</h3>
        <p>
          Instead of regular weapons, the Expert is able to pick from a list of
          monster-slaying weapons. Mechanically these are structured identically
          to the generic playbook weapon object
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>monster_slaying_weapon_slots</td>
              <td>
                The number of monster-slaying weapons this playbook can select
              </td>
              <td>number</td>
            </tr>
            <tr>
              <td>monster_slaying_weapons</td>
              <td>The monster-slaying weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-flake">The Flake</h2>
        <h3 id="gear">Gear</h3>
        <p>
          In addition to regular weapons, the Flake is able to pick from a list
          of hidden weapons. Mechanically these are structured identically to
          the generic playbook weapon object
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>normal_weapon_slots</td>
              <td>The number of normal weapons this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>normal_weapons</td>
              <td>The normal weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
            <tr>
              <td>hidden_weapon_slots</td>
              <td>The number of hidden weapons this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>hidden_weapons</td>
              <td>The hidden weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-initiate">The Initiate</h2>
        <h3 id="gear">Gear</h3>
        <p>
          Instead of regular weapons, the Initiate is able to pick from a list
          of old-fashioned weapons and modern weapons. Mechanically these are
          structured identically to the generic playbook weapon object
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>old_fashioned_weapon_slots</td>
              <td>
                The number of old-fashioned weapons this playbook can select. If
                the sect has either the fighting arts or obsolete gear
                tradition, then the Initiate may take 3 old-fashioned weapons.
                Otherwise, the Initiate may select 2 old-fashioned weapons.
              </td>
              <td>object old_fashioned_weapon_slots</td>
            </tr>
            <tr>
              <td>old_fashioned_weapons</td>
              <td>The old-fashioned weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
            <tr>
              <td>modern_weapon_slots</td>
              <td>
                The number of modern weapons this playbook can select. If the
                sect has either the fighting arts or obsolete gear tradition,
                then the Initiate may take 3 old-fashioned weapons. Otherwise,
                the Initiate may select 2 old-fashioned weapons.
              </td>
              <td>object modern_weapon_slots</td>
            </tr>
            <tr>
              <td>modern_weapons</td>
              <td>The modern weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
          </tbody>
        </table>
        <h3 id="sect">Sect</h3>
        <p>
          The Sect is the secret organization that the Initiate is a member of.
          The makeup of this Sect is determined by the Tradition tags selected
          by the player.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>good_tradition_slots</td>
              <td>The number of good traditions this playbook can select</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>good_traditions</td>
              <td>The good traditions this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
            <tr>
              <td>bad_tradition_slots</td>
              <td>The number of bad traditions this playbook can select</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>bad_traditions</td>
              <td>The bad traditions this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-monstrous">The Monstrous</h2>
        <h3 id="curses">Curses</h3>
        <p>
          Curses are the dark forces that drive the Monstrous. A curse is
          selected at character creation.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>curses</td>
              <td>
                The curses this playbook selects from at character creation
              </td>
              <td>array Curse</td>
            </tr>
          </tbody>
        </table>
        <h3 id="curse">Curse</h3>
        <p>
          Each curse has a negative effect on the character that they will have
          to resist. There are both mechanical and narrative consequences
          associated with each curse.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>The name of the curse</td>
              <td>string</td>
            </tr>
            <tr>
              <td>description</td>
              <td>
                A description of the curse and any mechanical effects it has
              </td>
              <td>string</td>
            </tr>
          </tbody>
        </table>
        <h3 id="natural-attack">Natural Attack</h3>
        <p>
          The Monstrous is able to make attacks with its body, in addition to
          using weapons. A natural attack is created by combining attacks.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>natural_attack_slots</td>
              <td>The number of attacks this playbook can select from</td>
              <td>number</td>
            </tr>
            <tr>
              <td>attacks</td>
              <td>The attacks this playbook can select from</td>
              <td>array Attack</td>
            </tr>
          </tbody>
        </table>
        <h3 id="attack">Attack</h3>
        <p>
          Attacks are used together to create the Monstrous&#39; natural attack.
          At least one attack of type <strong>base</strong> must be selected.
          Additional bases can be selected through leveling up.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>
                The name of the attack (base) or the description of the effect
                (extra)
              </td>
              <td>string</td>
            </tr>
            <tr>
              <td>type</td>
              <td>The type of attack. Either base or extra</td>
              <td>string</td>
            </tr>
            <tr>
              <td>harm</td>
              <td>The amount of harm this attack inflicts</td>
              <td>number</td>
            </tr>
            <tr>
              <td>tags</td>
              <td>The weapon tags on this attack</td>
              <td>array WeaponTag</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-mundane">The Mundane</h2>
        <h3 id="gear">Gear</h3>
        <p>
          Instead of regular weapons, the Mundane is able to pick from a list of
          mundane weapons. Mechanically these are structured identically to the
          generic playbook weapon object. They are also able to select a means
          of transport.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mundane_weapon_slots</td>
              <td>The number of mundane weapons this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>mundane_weapons</td>
              <td>The mundane weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
            <tr>
              <td>means_of_transport_slots</td>
              <td>The number of means of transport this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>means_of_transport</td>
              <td>The means of transport this playbook can select from</td>
              <td>array string</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-professional">The Professional</h2>
        <h3 id="gear">Gear</h3>
        <p>
          Instead of regular weapons, the Professional is able to pick from a
          list of serious weapons and a list of normal weapons. Mechanically
          these are structured identically to the generic playbook weapon
          object. They are also able to choose a piece of armour.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>armour_slots</td>
              <td>The number of pieces of armour this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>armour_options</td>
              <td>The pieces of armour this playbook can select from</td>
              <td>array Armour</td>
            </tr>
            <tr>
              <td>serious_weapon_slots</td>
              <td>The number of serious weapons this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>serious_weapons</td>
              <td>The serious weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
            <tr>
              <td>normal_weapon_slots</td>
              <td>The number of normal weapons this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>normal_weapons</td>
              <td>The serious weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
          </tbody>
        </table>
        <h3 id="armour">Armour</h3>
        <p>
          Armour provides protection from harm. For example, if a character
          wearing a piece of armour with 1-armour, and they&#39;re inflicted
          with a 2-harm attack, the armour would be subtracted from the harm the
          character will only take 1 harm.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>The number of pieces of armour this playbook can select</td>
              <td>string</td>
            </tr>
            <tr>
              <td>armour</td>
              <td>How much harm this piece of armour resists</td>
              <td>number</td>
            </tr>
            <tr>
              <td>tags</td>
              <td>The weapon tags on this item</td>
              <td>array WeaponTag</td>
            </tr>
          </tbody>
        </table>
        <h3 id="agency">Agency</h3>
        <p>
          The Agency is the organization that the Professional works for. The
          makeup of this Agency is determined by the Resource tags selected by
          the player.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>resource_slots</td>
              <td>The number of resources this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>resources</td>
              <td>The resources this playbook can select from</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>red_tape_slots</td>
              <td>
                The number of red tape attributes this playbook can select
              </td>
              <td>number</td>
            </tr>
            <tr>
              <td>red_tape</td>
              <td>The red tape attributes this playbook can select from</td>
              <td>array string</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-spell-slinger">The Spell-Slinger</h2>
        <h3 id="combat-magic">Combat Magic</h3>
        <p>
          In addition to regular weapons, the Spell-Slinger gets to pick spells
          that they can cast for damage. These spells are constructed of bases,
          which act functionally as weapons with harm and weapon tags; and
          extras, which add effects like harm or weapon tags onto a base.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>bases</td>
              <td>The bases</td>
              <td>number</td>
            </tr>
            <tr>
              <td>armour_options</td>
              <td>The pieces of armour this playbook can select from</td>
              <td>array Armour</td>
            </tr>
            <tr>
              <td>serious_weapon_slots</td>
              <td>The number of serious weapons this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>serious_weapons</td>
              <td>The serious weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
            <tr>
              <td>normal_weapon_slots</td>
              <td>The number of normal weapons this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>normal_weapons</td>
              <td>The serious weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-spooky">The Spooky</h2>
        <h3 id="dark-side">Dark Side</h3>
        <p>
          The Spooky has a dark side that emanates from the source of their
          otherworldly powers.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dark_side_slots</td>
              <td>How many dark side tags the hunter must select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>dark_side_tags</td>
              <td>The dark side tags the hunter may select from</td>
              <td>array string</td>
            </tr>
          </tbody>
        </table>
        <h2 id="the-wronged">The Wronged</h2>
        <h3 id="gear">Gear</h3>
        <p>
          Instead of regular weapons, the Professional is able to pick from a
          list of signature weapons and a list of practical weapons.
          Mechanically these are structured identically to the generic playbook
          weapon object. They are also able to choose a piece of armour with
          1-armour. They also have the option of selecting a vehicle.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>optional_vehicle</td>
              <td>The vehicles the hunter can select from</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>signature_weapon_slots</td>
              <td>The number of signature weapons this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>signature_weapons</td>
              <td>The signature weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
            <tr>
              <td>practical_weapon_slots</td>
              <td>The number of practical weapons this playbook can select</td>
              <td>number</td>
            </tr>
            <tr>
              <td>practical_weapons</td>
              <td>The practical weapons this playbook can select from</td>
              <td>array Weapon</td>
            </tr>
          </tbody>
        </table>
        <h3 id="armour">Armour</h3>
        <p>
          Armour provides protection from harm. For example, if a character
          wearing a piece of armour with 1-armour, and they&#39;re inflicted
          with a 2-harm attack, the armour would be subtracted from the harm the
          character will only take 1 harm.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>The number of pieces of armour this playbook can select</td>
              <td>string</td>
            </tr>
            <tr>
              <td>armour</td>
              <td>How much harm this piece of armour resists</td>
              <td>number</td>
            </tr>
            <tr>
              <td>tags</td>
              <td>The weapon tags on this item</td>
              <td>array WeaponTag</td>
            </tr>
          </tbody>
        </table>
        <h3 id="who-you-lost">Who You Lost</h3>
        <p>
          The Wronged lost people in their life at the hands of a monster they
          are sworn to seek.
        </p>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>who</td>
              <td>The options this hunter can select from for who they lost</td>
              <td>array string</td>
            </tr>
            <tr>
              <td>why</td>
              <td>
                The options this hunter can select from for why they
                couldn&#39;t save them
              </td>
              <td>array string</td>
            </tr>
          </tbody>
        </table>
        <h1 id="weapon-tags">Weapon Tags</h1>
        <p>
          Each weapon, attack, or piece of armour in the game is comprised of
          weapon tags that serve as narrative suggestions for how to treat that
          object. For example, the weapon tag &quot;Far&quot; does not specify a
          strict distance of how far a character must be from their target.
        </p>
        <h4 id="get-api-v1-weapon-tags-index-">
          GET /api/v1/weapon-tags/{index}
        </h4>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Data type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>index</td>
              <td>The weapon tag index for shorthand searching</td>
              <td>string</td>
            </tr>
            <tr>
              <td>name</td>
              <td>The name for this weapon tag</td>
              <td>string</td>
            </tr>
            <tr>
              <td>description</td>
              <td>A brief description on this weapon tag and what is means</td>
              <td>string</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  metaInfo: {
    title: "Documentation"
  }
};
</script>

<style></style>
