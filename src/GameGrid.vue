<template>

    <div>
        <el-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-col :span="4" slot="reference"><div class="grid-content bg-purple">{{game.league_name}}</div></el-col>
        </el-popover>
        <el-col :span="4"><div class="grid-content bg-purple">{{game.begin_time | formatDate}}</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">{{game.home_name}}</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">{{game.away_name}}</div></el-col>

    </div>

</template>

<script>
    export default {
        props: ["game"]
    }
</script>