export enum status {
    PENDING,
    RESOLVE,
    REJECT,
  }
  

export const fetchProjects = (setStatus : Function) => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchProjectsData = () =>
      fetch(`https://grzott.github.io/portfolioPage/src/data/projects.json`, {signal})
        .then((res) => {
          setStatus({status: status.PENDING, response: null});
          if (!res.ok) {
            setStatus({status: status.REJECT, response: null});
            return;
          }
          return res.json();
        })
        .then((res) => {
          if (!res) {
            setStatus({status: status.REJECT, response: null});
            return;
          }
          setStatus({status: status.RESOLVE, response: res.items});
          return;
        })
        .catch((err) => {
          console.log(err.name, 'projects');
          return;
        });
  
    const cancelProjectsFetch = () => controller.abort();
    return {fetchProjectsData, cancelProjectsFetch};
  };