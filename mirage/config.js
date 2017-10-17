export default function() {

  this.timing = 50;

  this.get('/problems', ({ problems }, request) => {
    let allProblems = problems.all();
    let { queryParams } = request;
    let offset = queryParams["page[offset]"];
    let limit = queryParams["page[limit]"];
    let q = queryParams["filter[q]"];

    offset = parseInt(offset, 10) || 0;
    limit = Math.min(200, parseInt(limit, 10) || 20);

    if (q && `${q}`.trim() !== '') {
      let exp = new RegExp(`${q}`, 'g');

      allProblems = allProblems.filter((item) => {
        return item.name.match(exp);
      });
    }

    let json = allProblems.slice(offset, offset + limit);

    json.meta = { total: allProblems.length };

    return json;
  });
}
