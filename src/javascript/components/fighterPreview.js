import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  
  // todo: show fighter info (image, name, health, etc.)
  if(fighter) {
    const fighterAvatar = createFighterImage(fighter);
    
    const fighterInfo = createElement({
      tagName: 'div',
      className: 'fighter-preview__info'
    });
    const fighterName = createElement({ 
      tagName: 'h3', 
      className: 'fighter-preview__name' 
    });
    fighterName.innerText = fighter.name;
    
    fighterInfo.innerHTML = `
      <p>Attack: ${fighter.attack}</p>
      <p>Defense: ${fighter.defense}</p>
      <p>Health: ${fighter.health}</p>
    `;

    fighterInfo.prepend(fighterName);
    fighterElement.append(fighterAvatar, fighterInfo);
  }

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
