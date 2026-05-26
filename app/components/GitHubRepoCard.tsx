type GitHubRepoCardProps = {
  repo: string;
};

type RepoResponse = {
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string | null;
  updated_at: string;
};

const formatUpdated = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Updated recently";
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

export default async function GitHubRepoCard({ repo }: GitHubRepoCardProps) {
  const response = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return (
      <div className="github-panel" role="status">
        <div className="github-header">
          <div>
            <p className="github-title">GitHub repo</p>
            <h3 className="github-name">{repo}</h3>
          </div>
          <a
            className="github-link"
            href={`https://github.com/${repo}`}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
        <p className="github-desc">
          Repo details are not available right now.
        </p>
      </div>
    );
  }

  const data = (await response.json()) as RepoResponse;

  return (
    <div className="github-panel">
      <div className="github-header">
        <div>
          <p className="github-title">GitHub repo</p>
          <h3 className="github-name">{data.full_name}</h3>
        </div>
        <a
          className="github-link"
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>
      <p className="github-desc">
        {data.description || "No description provided."}
      </p>
      <div className="github-stats">
        <span>Stars {data.stargazers_count}</span>
        <span>Forks {data.forks_count}</span>
        <span>Issues {data.open_issues_count}</span>
      </div>
      <div className="github-badges">
        <span className="github-pill">{data.language || "Mixed"}</span>
        <span className="github-pill">Updated {formatUpdated(data.updated_at)}</span>
      </div>
    </div>
  );
}
