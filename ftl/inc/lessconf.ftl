<script>
    less = {
        env: "development",
        globalVars: {
			static: '"${staticurl!}"'
        },
        relativeUrls: true
    };
</script>
<script src="${staticurl!}/common/less.js"></script>
<script>
    less.watch();
</script>
