// SearchFilter.jsx
export const SearchFilter = ({ search, filter, setSearch, setFilter,countries, setCountries }) => {
    const handleInputChange = e => {
      setSearch(e.target.value);
    };
  
    const handleSelectChange = e => {
      setFilter(e.target.value);
    };

    const sortcountries=(value)=>{
       const sortData=[...countries].sort((a,b)=>{
        return value =="asc"
        ?a.name.common.localeCompare(b.name.common):
        b.name.common.localeCompare(a.name.common)
       })
       setCountries(sortData)
    }
  
    return (
      <section className="section-searchFilter container">
        <div>
        <input
          type="text"
          placeholder="Search…"
          value={search}
          onChange={handleInputChange}
        />
        </div>

         <div>
            <button onClick={()=>sortcountries("asc")}>ASC</button>
         </div>
         <div>
            <button onClick={()=>sortcountries("desc")}>DESC</button>
         </div>

         <div>

        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="america">America</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        </div>
      </section>
    );
  };
  