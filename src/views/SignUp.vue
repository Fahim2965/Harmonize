<script >
export default {
    DataTransfer() {
        return {
            query: '',
            results: []
        };
    },
    methods: {
        search() {
            fetch('https://freeesound.org/apiv2/search/text/?query=${this.query}&token=mza7IVFXUJIu9hexCX0P0PgGiwrFZT6VO0oESxvM')
            .then(response => response.json())
            .then(data => {
                this.results = data.results;
            })
            .catch(error => {
                console.error(error);
            });
        },
        asyncFunction() {
            fetch
        }
    }
}
</script>