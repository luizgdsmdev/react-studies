import { RepositoriesInfoHolder, RepositorieTitle, RepositorieContext, RepositoriesInfoHolderWrapper, ProfileInfotext } from './style';
import { useData } from '../../context/DataContext';

export function RepositoriesHolder() {
  const { repos, isLoading } = useData();

  return (
    <RepositoriesInfoHolderWrapper>
      {isLoading && <ProfileInfotext>Loading repositories...</ProfileInfotext>}

      {!isLoading && repos ? (
        repos.error ? (
          <ProfileInfotext>{repos.error}</ProfileInfotext>
        ) : repos.length === 0 ? (
          <ProfileInfotext>No repositories found.</ProfileInfotext>
        ) : (
          repos.map((repo) => (
            <RepositoriesInfoHolder key={repo.id}>
              <RepositorieTitle>{repo.name}.</RepositorieTitle>
              <RepositorieContext>
                {repo.description || 'No description for this repository'}.
              </RepositorieContext>
            </RepositoriesInfoHolder>
          ))
        )
      ) : (
        !isLoading && <ProfileInfotext>You can now start your search! Look for the user profile name or organization listed on Github.<br/> Example: amzn, Uber, microsoft, and more. </ProfileInfotext>
      )}

    </RepositoriesInfoHolderWrapper>
  );
}