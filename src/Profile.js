import { getImageUrl } from './utils.js';

export default function Profile({ person, size }) {
  return (
    <section className='profile'>
      <h2>{person.name}</h2>
      <img
        className='avatar'
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession.join(' and ')}
        </li>
        <li>
          <b>Awards: {person.awards.length} </b>({person.awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}
